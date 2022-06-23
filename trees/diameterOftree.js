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
 var diameterOfBinaryTree = function(root) {
  // recursion mostly - tarun
  
  // root node of diameter will be the closest common parent
      
  let diameter = 0;
  

  const dfs = (node) => {
       if (!node) {
           return 0;
       }
  
      let left = dfs(node.left);
      let right = dfs(node.right);
      
      // set highest diameter so far by comparing
      diameter = Math.max(diameter, left + right);
      
      // return incremented value for max of 
      return 1 + Math.max(left, right);
  }
  
  dfs(root);

  return diameter;
 
};