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
  // a tree is something found in the forest with green leaves, they have roots, its called I think
  // think of the traversals
  // want to check 
  
  // left, root, right
  
  // recurse all the way to bottom left, then start traversing in-order left, root, right k times?
  // where counter is dictates traversal type
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