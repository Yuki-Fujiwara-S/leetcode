// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  let finalResult = [];
  let result = [];
  
  const backtrack = (open, close) => {
      if (open === close && close === n) {
          finalResult.push(result.join(""));
          return;
      }
      
      if (open < n) {
          result.push("(");
          backtrack(open + 1, close);
          result.pop();
      }
      
      if (close < open) {
          result.push(")");
          backtrack(open, close + 1);
          result.pop();
      }    
      
  }
  
  backtrack(0, 0);
  
  return finalResult;    
  
};