/**
 * @param {number[]} candies
 * @return {number}
 */

candies = [1,1,2,2,3,3]

var distributeCandies = function(candies) {
    var middle =candies.length/2;
    var obj={};
    var res=0;
    for(var i=0;i<candies.length;i++){
        obj[candies[i]]=true;
    }
    if(Object.keys(obj).length>=middle){
        res =middle
    }else{
        res =Object.keys(obj).length
    }
    console.log(res)
    return res
};

distributeCandies(candies)
