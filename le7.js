/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

 var res=0
 
 while(x){
     
    res = 10*res +x%10
    x =~~(x/10)
 }
 if(x>Math.pow(2,31)-1){
     return 0
 }else{

     return res
 }

};

console.log(reverse(-120300))