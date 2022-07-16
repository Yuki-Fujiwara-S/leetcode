/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  // two pass
  let result = [];
  
  let productsofar = 1;
  // front
  for (let i = 0; i< nums.length; i++) {
      result.push(productsofar);
      productsofar *= nums[i];
  }
      
  // back
  let productReverse = 1;
  for (let i = nums.length - 1; i >=0; i--) {
      result[i] *= productReverse;
      productReverse *= nums[i];
  }
  
  return result;
  
};