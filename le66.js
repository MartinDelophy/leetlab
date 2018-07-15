/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var res = parseInt(digits.toString().split(",").join(""))+1;

     return res.toString().split("")
    
};

console.log(plusOne([1,2,3]))