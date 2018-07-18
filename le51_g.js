/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var res=[];
    //var temp =[]

    function isOk(temp,k){
        console.log(temp,k)
        for(var i=0;i<k;i++){
            if(temp[k]==temp[i] || Math.abs(temp[k]-temp[i])==k-i){
                return false
            }
        }
        return true
    }



    function go(deep,temp){
        if(deep ==n){
            
            res.push(temp.slice())
            return
        }
        for(var i=0;i<n;i++){
            temp[deep]=i;
            
            if(isOk(temp,deep)){
                go(deep+1,temp)
            }
            
            
            
        }
    }
    go(0,[])
    return res.length

};
totalNQueens(4)