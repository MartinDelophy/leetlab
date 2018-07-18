function swap(arr,i,j) {  
    if(i!=j) {  
        var temp=arr[i];  
        arr[i]=arr[j];  
        arr[j]=temp;  
    }  
}  
var count=0;  
function show(arr) {  
    //console.log(arr);  
}  
function perm(arr) {  
    var result = new Array(arr.length);  
    var fac = 1;  
    for (var i = 2; i <= arr.length; i++)  
        fac *= i;  
    for (index = 0; index < fac; index++) {  
        var t = index;  
        for (i = 1; i <= arr.length; i++) {  
            var w = t % i;  
            console.log(w,t,i)
            for (j = i - 1; j > w; j--)  
            
                result[j] = result[j - 1];  
            result[w] = arr[i - 1];  
            t = Math.floor(t / i);  
        }  
        show(result);  
    }  
}  
perm

perm([1,2,3]);  