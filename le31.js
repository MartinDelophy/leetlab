/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var first =undefined
    var str =0
 for(var i=nums.length-1;i>1;i--){
    if(nums[i]>nums[i-1]){
        first =nums[i]
        str=i-1
        break;
    }
 }
 if(first == undefined){
     return nums.reverse()
 }
 for(var i=nums.length-1;i>0;i--){
    if(nums[i]>first){
        [nums[i], nums[str]] =[nums[str], nums[i]]
        break;
    }
 }
 
console.log(nums)
};
nextPermutation([1,4,6,5,2,1 ])