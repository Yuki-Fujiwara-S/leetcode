// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

var evalRPN = function(tokens) {
  let stack = [];
  let operators = {
      "+": function(a,b) {
          return a + b;
      },
      "-": function(a,b) {
          return a - b;
      },
      "/": function(a,b) {
          return Math.trunc(a / b);
      },
      "*": function(a,b) {
          return a * b;
      }
  }
  
  for (let i =  0; i < tokens.length; i++) {
      if (tokens[i] in operators) {
          let first = stack.pop();
          let next = stack.pop();
          
          stack.push(operators[tokens[i]](next, first))
      } else {
          stack.push(Number(tokens[i]));
      }
  }
  
  return stack[0];
};