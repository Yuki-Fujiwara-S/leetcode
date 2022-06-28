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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

 var isSubtree = function(root, subRoot) {
   
  if(!root) {
      return false;
  }
  
  if(isSameTree(root, subRoot)) {
      return true;
  }
      
  let leftCheck = isSubtree(root.left, subRoot);
  let rightCheck = isSubtree(root.right, subRoot);
  
  return leftCheck || rightCheck;
  
};

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
  let leftCheck = isSameTree(p.left, q.left); 
  let rightCheck = isSameTree(p.right, q.right);
  
  return leftCheck && rightCheck;
  
};