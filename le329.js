/**
 * @param {number[][]} matrix
 * @return {number}
 */
//solution 1 time out
var longestIncreasingPath = function(matrix) {
    if(matrix.length==0){
        return 0
    }
    var m=matrix.length,n=matrix[0].length;
    var action={left:[1,0],right:[-1,0],down:[0,1],up:[0,-1]};
    var res=0;

    function go(node){
        if(node.deep >m*n){
            return;
        }
        if(node.deep >res){
            res =node.deep
        }
        
        for(var i in action){
            var next_x=node.pos[0]+action[i][0];
            var next_y=node.pos[1]+action[i][1];
            if(next_x>=m || next_y>=n ||next_x<0 || next_y<0 ){
               continue;
            }
            if(matrix[next_x][next_y]>node.value){
                    var chain={value:matrix[next_x][next_y],next:{},deep:node.deep+1,pos:[next_x,next_y]}
                    go(chain)
                }
        }
    }
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            var chain={value:matrix[i][j],next:{},deep:1,pos:[i,j]}
            
            go(chain)
        }
    }
    console.log(res)
   
return res
    
};


var longestIncreasingPath = function(matrix) {
    if(matrix.length==0){
        return 0
    }
    var m=matrix.length,n=matrix[0].length;
    var action={left:[1,0],right:[-1,0],down:[0,1],up:[0,-1]};
    var arr=[]
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            arr.push(matrix[i][j])
        }
    }
    var res=0;
    var arr =arr.sort().reverse();
    function go(node,index){
        if(node.deep >m*n){
            return;
        }
        if(node.deep >res){
            res =node.deep
        }
        
        for(var i in action){
            var next_x=node.pos[0]+action[i][0];
            var next_y=node.pos[1]+action[i][1];
            if(next_x>=m || next_y>=n ||next_x<0 || next_y<0 ){
               continue;
            }
            for(var j=index;j<arr.length;j++){
                if(matrix[next_x][next_y]<node.value && matrix[next_x][next_y]==arr[j]){
                    var chain={value:matrix[next_x][next_y],next:{},deep:node.deep+1,pos:[next_x,next_y]}
                    go(chain,j)
                    break;
                }
                
            }
        }
    }
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(matrix[i][j]==arr[0]){
                var chain={value:matrix[i][j],next:{},deep:1,pos:[i,j]}
                go(chain,1)
            }
            
            
        }
    }
    console.log(res)
    return res

}
longestIncreasingPath([
    [7,7,5],
    [2,4,6],
    [8,2,0]] )