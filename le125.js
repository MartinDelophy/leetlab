/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var s1="";
    for(var i=0;i<s.length;i++){
        if((97<=s[i].charCodeAt() && 122>=s[i].charCodeAt())||(65<=s[i].charCodeAt() && 90>=s[i].charCodeAt())|| (48<=s[i].charCodeAt() && 57>=s[i].charCodeAt())){
                s1+=s[i]
        }
    }
    s1 =s1.toLocaleLowerCase()
    var s2 =s1.split("").reverse().join("");
    console.log(s1,s2)
    if(s1==s2){
        return true
    }else{
        return false
    }

};
console.log(isPalindrome(""))