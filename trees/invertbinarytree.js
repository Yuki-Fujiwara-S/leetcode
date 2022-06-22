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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  // switch left and right on each level
  // helper function?
  
  if (root) {
      //temp variable
      let leftTree = root.left;
      root.left = root.right;
      root.right = leftTree;    
      
      invertTree(root.left);
      invertTree(root.right);
  }  
  
  return root;
};