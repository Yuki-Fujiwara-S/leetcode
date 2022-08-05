// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  // check left or right
  // if yes- keep checking same direction?
  
  let map1 = {};
  for (let i = 0; i < s1.length; i++) {
      if (!map1[s1[i]]) {
          map1[s1[i]] = 1;
      } else {
          map1[s1[i]] += 1;
      }
  }
  
  let start = 0;   
  let map2 = {};
  
  for (let i = 0; i < s2.length; i++) {
      let windowSize = i - start + 1;
      
      if (!map2[s2[i]]) {
          map2[s2[i]] = 1;
      } else {
          map2[s2[i]] += 1;
      }
      
      if (windowSize > s1.length) {
          map2[s2[start]] -= 1;
          if (map2[s2[start]] === 0) {
              delete map2[s2[start]]; 
          }
          start++;
      }
      
      if (windowSize === s1.length) {
          if (isSame(map1, map2)) {
              return true;
          }
      }
  }
  
  return false;
  
  
};

const isSame = function(m1, m2) {
  for (let key in m1) {
      if (m1[key] !== m2[key]) {
          return false;
      }
  }
  return true;
}