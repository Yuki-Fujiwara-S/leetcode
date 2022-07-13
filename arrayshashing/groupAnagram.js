/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  // if yuki gets this tarun/varun will be impressed
  
  let map = {};
  
  for (str of strs) {
      let sortedStr = str.split("").sort().join("")
      if (map[sortedStr]) {
          map[sortedStr].push(str);
      } else {
          map[sortedStr] = [str]
      }
  }
  
  let result = [];
  
  for (key in map) {
      result.push(map[key]);
  }
  
  return result;    
  
  
  
  
  
  // helper function that returns boolean?
  
  
  
  // if it is same as existing anagram array, add to that array, if not create new array
  
 
  
  
  
  
  
  
  
};