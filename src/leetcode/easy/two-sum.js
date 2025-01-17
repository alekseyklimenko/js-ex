// https://leetcode.com/problems/two-sum/

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsLen = nums.length;
    if (numsLen < 2) {
        return [];
    }
    let curI = 0;
    let curVal = nums[curI];
    while (curI < numsLen) {
        for (let i = curI + 1; i < numsLen; i++) {
            if (curVal + nums[i] === target) {
                return [curI, i];
            }
        }
        curI++;
        curVal = nums[curI];
    }
    return [];
};

var twoSumHash = function(nums, target) {
    let numsLen = nums.length;
    if (numsLen < 2) {
        return [];
    }
    let map = new Map();
    for (let i = 0; i < numsLen; i++) {
        map.set(nums[i], i);
    }
    for (i = 0; i < numsLen; i++) {
        if (map.has(target - nums[i])) {
            if (map.get(target - nums[i]) === i) { // do not use the same value
                continue;
            }
            return [i, map.get(target - nums[i])];
        }
    }
    return [];
};



console.log(twoSumHash([2,7,11,15], 9)) // [0,1] Because nums[0] + nums[1] == 9, we return [0, 1].

console.log(twoSumHash([3, 2, 4], 6)) // [1,2]
console.log(twoSumHash([3, 3], 6)) // [0,1]
