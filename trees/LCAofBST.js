/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

 var lowestCommonAncestor = function(root, p, q) {
  // ask clarifying questions - constraints
  
  // store values?
  // Use bounds?
  
  if (!root) {
      return null;
  }
  
  let higher = Math.max(p.val, q.val);
  let lower = Math.min(p.val, q.val);
  
  if (root.val >= lower && root.val <= higher) {
      return root;
  }
  
  if (root.val > higher) {
      return lowestCommonAncestor(root.left, p, q);
  }
  
  if (root.val < lower) {
      return lowestCommonAncestor(root.right, p, q);
  }
  
};