// Given the root of a binary tree, return the level order traversal of its nodes' values. 
// (i.e., from left to right, level by level).

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
 * @return {number[][]}
 */

 var levelOrder = function(root) {
  // left and right  
  if (!root) {
      return [];
  }
  
  // bfs
  let queue = [root];
  let result = [];
  
  while(queue.length) {
      let subArr = [];
      let length = queue.length;
      
      for (let i = 0; i < length; i++) {
          let elm = queue.shift();
          subArr.push(elm.val);
          
          //need to add children to queue
          if (elm.left) {
              queue.push(elm.left);
          }
          if (elm.right) {
              queue.push(elm.right);
          }
      }
      result.push(subArr);
  }
  return result;
};