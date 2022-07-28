// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    
    
  let result = [];
  
  let sorted = nums.sort(function(a,b) {
      return a - b;
  })
  
  for (let i = 0; i < sorted.length; i++)  {
      if (i !== 0 && sorted[i] === sorted[i - 1]) {
          continue;
      }
      
      let start = i + 1;
      let end = sorted.length - 1;
      let target = sorted[i];
      
      while (start < end) {
          let numsum = nums[start] + nums[end];
          if (numsum + target === 0) {
              result.push([nums[start], nums[i], nums[end]]);
              while (nums[start] === nums[start + 1]) {
                  start++;
              }
              while (nums[end] === nums[end - 1]) {
                  end--;
              }
              start++;
              end--;
          } else if (numsum + target > 0) {
              end--;
          } else {
              start++;
          }
      }    
  }
  
  return result;
  
};