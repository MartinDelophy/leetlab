function check2(arr, n) {
    for(var i = 0; i <= n - 1; i++) {
      if((Math.abs(arr[i] - arr[n]) == n - i) || (arr[i] == arr[n])) {
        return false;
      }
    }
    return true;
  }

function backtrack(k) {
  if(k >= n) {
    console.log(arr);
    return
  } 
    for(var i = 0;i < n; i++) {
      arr[k] = i;
      if(check2(arr, k)) {
        backtrack(k + 1);
      }
    }
  
}
   var arr = [], n = 4;
backtrack(0);