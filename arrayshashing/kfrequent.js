/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    
  let map = {};
  
  for (let num of nums) {
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

// Alternate solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  let map = new Map();
  let res = [];
  let bucket = Array.from({ length: nums.length + 1 }, () => []); // to create unique arrays
  
  // storing frequency of numbers in a map
  for (let n of nums) {
      map.set(n, (map.has(n) ? 1 + map.get(n) : 1))
  }

  // Poppulate the bucket with numbers in frequency
  // as the index of the bucket
  for (const [key, value] of map.entries()) {
      bucket[value].push(key);
  }
  
  for (let i = bucket.length - 1; i >= 0; i--) {
      if (bucket[i].length > 0) {
          for (let n of bucket[i]) {
              res.push(n);
              if (res.length === k)
                  return res;
          }
      }
  }
};

