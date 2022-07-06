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