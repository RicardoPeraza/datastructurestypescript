/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

example 1
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

example 2

Input: nums = [3,2,4], target = 6
Output: [1,2]

example 3 

Input: nums = [3,3], target = 6
Output: [0,1]


*/

//var nums: number[] = [2, 7, 11, 15];
var nums: number[] = [3, 2, 4, 15];
var target: number = 6;

function twoSums(nums: number[], target: number) {
  let map = new Map();
  let result: number[];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement) && map.get(complement) != i) {
      return (result = [i, map.get(complement)]);
    }
  }
}

console.log(twoSums(nums, target));
