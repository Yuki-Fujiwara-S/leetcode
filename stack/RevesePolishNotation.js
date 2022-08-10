// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  let stack = [];
  let totalSoFar = 0;
  let first = true;
  
  //lhs rhs?
  for (let i = 0; i < tokens.length; i++) {
      // ADDITION
      if (tokens[i] === "+") {
         if (first) {
             totalSoFar = stack.pop() + stack.pop();
             first = false;
         } else {
             totalSoFar += stack.pop();
         }
          continue;   
      }
      
      // SUBTRACTION
      if (tokens[i] === "-") {
         if (first) {
             tokenOne = stack.pop();
             tokenTwo = stack.pop();
             totalSoFar = tokenOne - tokenTwo;
             first = false;
         } else {
             totalSoFar = stack.pop() - totalSoFar;
         }
          continue;   
      }
      
      // MULTIPLICATION
      if (tokens[i] === "*") {
         if (first) {
             totalSoFar = stack.pop() * stack.pop();
             first = false;
         } else {
             totalSoFar *= stack.pop();
         }
          continue;   
      }
      
      
      
      // push to stack
      stack.push(tokens[i]);
  }
  
  return totalSoFar;
  
};