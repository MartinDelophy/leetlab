while(n=readline()){
    n = parseInt(n);
    line = readline();
    arr = line.split(' ');
    arr.sort(function(a,b){
        return (b+a)-(a+b);
    });
    print(arr.join(''))
}