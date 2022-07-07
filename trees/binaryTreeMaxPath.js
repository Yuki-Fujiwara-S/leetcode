// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

var maxPathSum = function(root) {
  let max = -999999;
 function maxGain(node){
      if(!node) return 0;
      const leftGain = Math.max( maxGain(node.left),0);
      const rightGain = Math.max( maxGain(node.right),0);

      let subPath =  node.val + leftGain + rightGain;
      max = Math.max(subPath,max)

      return node.val + Math.max(leftGain,rightGain)
 }
  maxGain(root)
  return max
};