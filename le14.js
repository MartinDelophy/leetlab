/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length ==0){
        return ""
    }
    if(strs.length ==1){
        return strs[0]
    }
    var res=""
    strs=strs.sort(function(a,b){return a.length>b.length})
    for(var i=0;i<strs[0].length;i++){
        var jud =true;
        for(var j=1;j<strs.length;j++){
            if(strs[j][i]!= strs[0][i]){
                jud =false
            }
        }
        if(jud){
            res +=strs[0][i]
        }else{
            return res
        }    
    }
    return res
};

console.log(longestCommonPrefix(["dog","racecar","car"])) 