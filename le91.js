function encode (str){
    //gen dict
    let dict = {};
    for (let i = 'A'.charCodeAt() ; i <= 'Z'.charCodeAt(); i++) {
        dict[String.fromCharCode(i)] = (i - 64) +'';
    }
    let totalCount = 0;

    function next (str) {
        if (str.length == 0) {
            totalCount++;
            return;
        }
        for (let one in dict) {
           if (str.length >= dict[one].length)
            str.slice(0, dict[one].length) == dict[one] ? next(str.slice(dict[one].length)):'';
        }
    }

    next(str);
    return totalCount;

}

console.log(encode('226'))

