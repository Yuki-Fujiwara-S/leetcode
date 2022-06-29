// Given the root of a binary tree, imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom.
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
 * @return {number[]}
 */

 var rightSideView = function(root) {
    
  if (!root) {
      return [];
  }
  
  let queue = [root];
  let result = [];
  
  while (queue.length) {
      let queueSize = queue.length;
      
      for (let i = 0; i < queueSize; i++){
          let elm = queue.shift();
          if (i === queueSize - 1) {
              result.push(elm.val);
          }
          if (elm.left) {
              queue.push(elm.left);
          }
          
          if (elm.right) {
              queue.push(elm.right);
          }
      }
  }
  
  return result;
  
};