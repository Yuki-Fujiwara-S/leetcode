/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const obj = {}
  for (const num of nums) {
      if (obj[num]) {
          return true;
      }
      obj[num] = true;
  }
  return false;
};

const containsDuplicate = function(nums) {
  const set = new Set();
  for (const num of nums) {
      if (set.has(num)) {
          return true;
      }
      set.add(num);
  }
  return false;
}

// can get away with a set