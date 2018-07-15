/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var action={left:[1,0],down:[0,1]};
    var tree =[0,0,[]];
    var res=0;
    function go(node){
        if(node[0]>m-1 || node[1] >n-1){
            return
        }
        if(node[0]==m-1 && node[1] ==n-1){
            res++;
            return
        }

        for(var i in action){
            var newNode =[];
            newNode[0]=node[0]+action[i][0];
            newNode[1]=node[1]+action[i][1];
            newNode[2]=[];
            node[2].push(newNode);
            go(newNode)
        }
    }
    go(tree)
    return res
    
};

console.log(uniquePaths(13,12))