/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   if(nums.length === 0) {
       return 0;
   } 
    
   let left = 0;
   let right = nums.length - 1;
    
   while(left < right) {
       
       const middle = Math.floor(left + ( right - left ) / 2);
       
       if(target === nums[middle]) {
            return middle; 
       } else if (target < nums[middle]) {
           right = middle;
       } else {
           left = middle + 1;
       }
       
   }
    
    return nums[left] < target ? left + 1: left;
};