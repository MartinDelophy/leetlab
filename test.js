function go(a,b){
    var ptr =0
    var jud =Infinity
    for(var i=0;i<a.length;i++){
        if(a[i]<jud){
            jud =a[i]
            ptr =i
        }
    }
    var clone =ptr
    var count =0
    while(ptr<a.length-1){
        ptr  += b-1
        count ++
    }
    while(clone >0){
        clone -=b-1
        count++
    }
    console.log(count)
 }
   go([2,3,1,4,5],3) 





