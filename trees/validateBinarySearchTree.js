// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


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
 * @return {boolean}
 */

 var isValidBST = function(root) {
  const isValid = (node, smaller, greater) => {   
 
      if (!node) {
          return true;
      }
      
      if (node.val <= smaller) {
          return false;
      }
      
      if (node.val >= greater) {
          return false;
      }
      
      let left = isValid(node.left, smaller, node.val);
      let right = isValid(node.right, node.val, greater);
      
      return left && right;
  }
  
  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);    
};