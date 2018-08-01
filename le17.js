/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var dict={
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"qprs",
        "8":"tuv",
        "9":"wxyz",
    }
    var ret =[];
    var res=[]
        for(var j=0;j< digits.length;j++){
           for(var k=0;k<dict[digits[j]].length;k++) {
               if(res.length <dict[digits[j]].length){
                res.push(dict[digits[j]][k])  
                ret =res
               }else{
                   var temp =[];                                
                   for(var l=0;l<res.length;l++){
                    temp.push(res[l]+dict[digits[j]][k])
                   } 
                   ret =ret.concat(temp)
                   
               }
           }
           res= ret.slice()
           ret=[]
    }
   return res
    
};
letterCombinations("234")