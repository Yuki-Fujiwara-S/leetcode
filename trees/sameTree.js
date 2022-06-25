/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    
  if (!p && !q) {
      return true;
  }
  
  if (!p || !q) {
      return false;
  }
  
  if (p.val !== q.val) {
      return false;
  }
    
  // need to return true when done checking all nodes - how to use recursion majik?
  // does if !p and !q case work for returning true; 
  let leftCheck = isSameTree(p.left, q.left); 
  let rightCheck = isSameTree(p.right, q.right);
  
  return leftCheck && rightCheck;
  
};