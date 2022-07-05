// Given the root of a binary search tree, and an integer k, 
// return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {

  let counter = 0;
  let result = 0;
  
  const findKth = (root) => {
      if (root.left) {
          findKth(root.left);
      }
      
      counter += 1;
      if (counter === k) {
          result = root.val;
      }
      
      if (root.right) {
          findKth(root.right);
      }
  }
  
  findKth(root);
  
  return result;
  
  
};


// Another solution using in-order traversal
var kthSmallest = function(root, k) {
  let res = [];
  dfs(root, res);
  return res[k - 1];
// T.C: O(N)
// S.C: O(N)
};

const dfs = (root, res) => {
  if (!root) {
      return;
  }
  dfs(root.left, res);
  res.push(root.val);
  dfs(root.right, res);
}