/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left =0;
    var right =height.length-1;

    var res=0
    while (right >left){
        if(height[right] >height[left]){
            res =Math.max(res,(right-left)*height[left])
            left ++
        }else if(height[right] <height[left]){
            res =Math.max(res,(right-left)*height[right])
            right --
        }else{
            res =Math.max(res,(right-left)*height[right])
            // right --
            left ++ 
        }
    }
    return res
};

console.log(maxArea([1,2,3,5]))