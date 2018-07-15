/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if(tasks.length ==0){
        return 0
    }
    n +=1;
    var  obj ={};
    var arr=[];
    var count =0;
    var res_arr=[]
    for(one of tasks){
        if(obj[one]==undefined){
            obj[one]=1;
        }else{
            obj[one] +=1;
        }
    }
    for(var i in obj){
        arr.push({name:i,value:obj[i]})
    }   
    arr= arr.sort(function(e,f){return e.value <f.value})
    function go(arr){

        if(arr.length <=0){
            return;
        }

        if(arr.length<=n){
            for(var i=0;i<arr.length;i++){
                arr[i].value -=1;
                res_arr.push(arr[i].name)
            }
            for(var i=0;i<n-arr.length;i++){
                res_arr.push("");
            }
        }else{
            for(var i=0;i<n;i++){
                arr[i].value -=1;
                res_arr.push(arr[i].name)
            }
        }
        arr =arr.filter((e)=>{return e.value !=0})
        go(arr)
    }
    go(arr)
    for(var j=res_arr.length-1;j>0;j--){
        if(res_arr[j]==""){
            res_arr.pop()
        }else{
            break;
        }
    }
 
console.log(res_arr)
    return res_arr.length
    
};
console.log(leastInterval(["C","C","C","C","A","A","A","B","B","B"],4))