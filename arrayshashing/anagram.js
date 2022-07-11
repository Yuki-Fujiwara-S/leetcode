// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  // return false immediately if expected alphabet doesn't allign
  // map fellow
  
  // clarify uppercase, special characters
  // use ASCII values
  
  if (s.length !== t.length) {
      return false;
  }
  
  const map = {};
  // let firstword = s.split("");
  
  for (const letter of s) {
      if(map[letter]) {
          map[letter] += 1;
      } else {
          map[letter] = 1;
      }
  }
  
  const map2 = {};
  // let secondword = t.split("");
  
  for (const letter of t) {
      if(map2[letter]) {
          map2[letter] += 1;
      } else {
          map2[letter] = 1;
      }
  }
  
  for (const elm in map) {
      if (map[elm] !== map2[elm]) {
          return false;
      }
  }
  
  return true;    
  
};

