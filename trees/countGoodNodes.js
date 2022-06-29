// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

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

 var goodNodes = function(root) {
  // counter?
  // current highest?
  // recursion babu?
  
  let count = 0;
  const checkGood = (node, highest) => {        
      if (!node) {
          return;
      }
      if (highest <= node.val ) {
          highest = node.val;
          count += 1;
      }
      checkGood(node.left, highest);
      checkGood(node.right, highest);
  }
  
  checkGood(root, root.val);
  
  return count;
      
};