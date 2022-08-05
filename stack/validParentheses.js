// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  // Queue - FIFO
  // Stack - LIFO
  // pop off anything from the stack
      
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ")") {
          if (stack.pop() !== "(") {
              console.log(stack[-1]);
              return false;
          }
      } else if (s[i] === "}") {
          if (stack.pop() !== "{") {
              return false;
          }
      } else if (s[i] === "]") {
          if (stack.pop() !== "[") {
              return false;
          }
      } else {
          stack.push(s[i]);
      }
      
  }
  
  return stack.length === 0;
   
  
};
