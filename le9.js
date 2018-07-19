/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    var res =0
    var temp =x;
    while (x){
        res=10*res+x%10
        x = ~~(x/10)
    }
    if(temp ==res){
        return true
    }else{
        return false
    }
};

console.log(isPalindrome(10))