// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, 
// construct and return the binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {

  if (inorder.length === 0) {
      return null;
  }
  
  let preRoot = preorder[0];
  let node = new TreeNode(preRoot);
  
  let index = inorder.indexOf(preRoot);
  let left = inorder.slice(0, index);
  let right = inorder.slice(index + 1);
  
  let newLeftPreorder = preorder.slice(1);
  let newRightPreorder = preorder.slice(1 + left.length);
  
  node.left = buildTree(newLeftPreorder, left);
  node.right = buildTree(newRightPreorder, right);    
  
  return node;
  
};


// alternate solution

const helper = (preorder, map, p1, p2, i1, i2) => {
  if (p1 >= p2 || i1 >= i2) return null;
  const inorderIdx = map.get(preorder[p1]); // Inorder root index
  const leftSubtreeSize = inorderIdx - i1;
  return new TreeNode(
    preorder[p1],
    helper(preorder, map, p1 + 1, p1 + leftSubtreeSize + 1, i1, inorderIdx),
    helper(preorder, map, p1 + leftSubtreeSize + 1, p2, inorderIdx + 1, i2)
  );
};

const buildTree = (preorder, inorder) => {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) map.set(inorder[i], i);
  return helper(preorder, map, 0, preorder.length, 0, inorder.length);
};