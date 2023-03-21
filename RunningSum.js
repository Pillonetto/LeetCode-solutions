/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
 
var runningSum = function(nums) {
    let runningSum = new Array(nums.length);
    runningSum[0] = nums[0];
    
  //Update runningSum by adding current element to previous runningSum
   for(let i = 1; i < nums.length; i++)
       runningSum[i] = runningSum[i-1] + nums[i]
   
   return runningSum;
};
