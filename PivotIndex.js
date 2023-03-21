/**
 *
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 * Return the leftmost pivot index. If no such index exists, return -1.
 *
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {

    let left = 0;
    let right;
    let totalSum = nums.reduce((total, num) => total + num);

    for(let i = 0; i < nums.length; i++){
        //Remove nums[i] as well bc the pivot index is not part of the sums
        right = totalSum - left - nums[i];

        if(left === right){
            return i;
        }

        left += nums[i];
    }
    return -1;
};
