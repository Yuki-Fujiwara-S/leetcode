/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    
  let map = {};
  
  for (let num of nums) {
      // if (map[num]) {
      //     map[num] += 1;
      // } else {
      //     map[num] = 1;
      // }
      map[num] = (map[num] || 0) + 1;
  }
  
  let arr = [];
  
  for (let key in map) {
      arr.push([key, map[key]]);
  }
  
  let sortedArray = arr.sort(function(a, b) {
      return b[1] - a[1];
  });
  
  let result = [];
  for (elm of sortedArray) {
      result.push(elm[0]);
      if (result.length === k) {
          return result;
      }
  }
  
};

