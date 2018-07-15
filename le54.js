
var matrix =[[1,2,3],[4,5,6],[7,8,9]]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length ==0){
        return []
    }
    var res=[];
    var count =(~~(matrix.length/2))+1;
    var tempmatrix =matrix;
    var odd =(matrix.length%2==0)?true:false;


    for(var i=0;i<count;i++){
        for(var j=i;j<tempmatrix[i].length-i;j++){
            res.push(tempmatrix[i][j]);
        }
            
        for(var j=1+i;j<tempmatrix.length-1-i;j++){
            res.push(tempmatrix[j-i][tempmatrix[0].length-1+i]);
        }
            
        if(!odd && i==count-1){
        }else{
            for(var j=tempmatrix[i].length-1-i;j>=i;j--){
                res.push(tempmatrix[tempmatrix.length-1-i][j]);
            }
            
            for(var j=tempmatrix.length-2-i;j>i;j--){
                res.push(tempmatrix[j][i]); 
            }
            
        }
    }
    return res;
}

console.log(spiralOrder(matrix))