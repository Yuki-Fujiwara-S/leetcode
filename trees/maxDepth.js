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
 * @return {number}
 */
 var maxDepth = function(root) {
  // recursion?
  // need a counter perhaps
  // need to select non null to find longest path
  
  if (!root) {
      return 0;
  }
  
  let countLeft = 1 + maxDepth(root.left);
  let countRight = 1 + maxDepth(root.right);
  
  return countLeft > countRight ? countLeft : countRight;
      
  
};