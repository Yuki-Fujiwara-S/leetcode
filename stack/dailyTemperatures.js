// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    
  let stack = [];
  
  
  for (let i = 0; i < temperatures.length; i++) {
      let next = i + 1;
      let days = 1;
      while (temperatures[i] >= temperatures[next]) {
          days++;
          next++;
      }
      if (next === temperatures.length) {
          stack.push(0);
      } else {
          stack.push(days);
      }
  }
  
  console.log(stack);
  
  return stack;
};

// Alternate solution using stack

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    
  let result = Array(temperatures.length).fill(0);
  
  let stack = [];
  
  for (let i = 0; i < temperatures.length; i++) {
      while (stack.length !== 0 && temperatures[i] > stack[stack.length - 1][0]) {
          let stackTemp, stackIndex;
          [stackTemp, stackIndex] = stack.pop();
          result[stackIndex] = i - stackIndex;
      }
      stack.push([temperatures[i], i]);
  }
  
  return result;
  
};
