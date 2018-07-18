/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var res="";

    function isPalindrome(s){
        
        var rev =s.split("").reverse().join("")
        if(s == rev){
            return true
        }
        return false
    }
    function go(k,str){
        if(k == s.length){
            return
        }
        for(var i=k;i<s.length;i++){
            str +=s[i];
            if(isPalindrome(str)){
                if(str.length >res.length){
                    res =str
                }
            }
        }

    }
    for(var i=0;i<s.length;i++){
        go(i,"")
    }
    
    return res


};
longestPalindrome("cbbd")