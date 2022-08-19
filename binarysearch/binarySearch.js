// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

var search = function(nums, target) {
  let [start, end] = [0, nums.length - 1];
  
  while (start <= end){
      let middle = Math.floor(end - start / 2);
      let guess = nums[middle];
      
      if (guess === target) {
          return middle;
      }
      
      if (target < guess) {
          end = middle - 1;
      }
      
      if (target > guess) {
          start = middle + 1;
      }
  }
  
  return -1;
};