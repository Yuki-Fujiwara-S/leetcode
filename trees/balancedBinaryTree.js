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
 var isBalanced = function(root) {
  const depth = (node) => {
      
      if (!node) {
          return 0;
      }
      
      let countLeft = 1 + depth(node.left);
      let countRight = 1 + depth(node.right);
      
      return Math.max(countLeft, countRight);
  }
  
  if (!root) {
      return true;
  }
  
  let left = depth(root.left);
  let right = depth(root.right)
   
  if (Math.abs(left - right) > 1) {
      return false;
  }
  
  return isBalanced(root.left) && isBalanced(root.right);

};