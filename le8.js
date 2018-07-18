/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var str =str.trim()

    function isNumber(s){
        if(s==' '){
            return false
        }
        return !isNaN(s)
    }

    var sign =1;
    if(str[0]=='-'){
        sign = -1
        str =str.slice(1)
    }else if(str[0]=='+'){
        str =str.slice(1)
    }
    var res=0
    for(var i=0;i<str.length;i++){
        if(isNumber(str[i])){
            res =10*res +parseInt(str[i])
        }else{
            break;
        }
    }
    if(Math.pow(2,31)<=res){
        if(sign ==1){
            return Math.pow(2,31)-1
        }else{
            return -Math.pow(2,31)
        }
    }
    return sign*res

};

console.log(myAtoi("2147483648"))