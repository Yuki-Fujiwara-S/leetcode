// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// no O(n) solution , nlog(n)
// var longestConsecutive = function(nums) {
//     // can see screen
//     // 
//     // check longest
//     if (nums.length === 0) {
//         return 0;
//     }
    
//     let sorted = nums.sort(function(a,b) {
//         return a - b;
//     });
    
//     let sortedSet = [...new Set(sorted)]
    
    
//     let counter = 1;
//     let largestsofar = 0;
    
//     for (let i = 0; i < sortedSet.length - 1; i++) {
//         if (sortedSet[i + 1] - sortedSet[i] === 1) {
//             counter += 1;
//         } else {
//             if (counter > largestsofar) {
//                 largestsofar = counter;
//             }
//             counter = 1;
//         }
        
//     }
    
//     return largestsofar > counter ? largestsofar : counter;

// };