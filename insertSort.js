function insertSort(arr){
    var res =[arr[0]]
    for(var i=1;i<arr.length;i++){
        var temp =arr[i];
        var j= i-1
        while(res.length <= arr.length && temp <res[j]){
            res[j+1] =res[j]
            j--
        }
        res[j+1]=temp

    }
    return res

}

console.log(insertSort([49,38,65,97,76,13,27,49]))