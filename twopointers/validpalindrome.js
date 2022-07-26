// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let onlyAlph = s.replace(/[^a-z0-9]/gi,'');
  let strArray = onlyAlph.split("");
  let filtered = strArray.map(str => str.toLowerCase());

  
 
  let start = 0;
  let end = filtered.length - 1;
 
  
  
  
  while (start < end) {
      if (filtered[start] !== filtered[end]) {
          return false;
      }
      start++;
      end--;
  }
  
  
  return true;

  
};