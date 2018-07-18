/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length ==0){
        return ""
    }
    if(numRows ==1){
        return s;
    }
    var obj=[]
    for(var i=0;i<numRows;i++){
        obj[i]=[]
    }
    function go(ptr,jud,cur){
        if(ptr ==s.length){
            return
        }
        if(jud){
            if(cur<numRows-1){
                obj[cur++].push(s[ptr++]) 
                go(ptr,jud,cur)
            }else{
                obj[cur].push(s[ptr]) 
                jud = !jud;
                cur--
                ptr++
                go(ptr,jud,cur)
            }
        }else{
            if(cur >0){
                obj[cur--].push(s[ptr++]) 
                go(ptr,jud,cur)
            }else{

                    obj[cur].push(s[ptr]) 
                    jud = !jud;
                    cur++
                    ptr++
                    go(ptr,jud,cur)
                }

        }


    }
    go(0,true,0)
    var arr=[]
    for(var i=0;i<obj.length;i++){
        arr=arr.concat(obj[i])
    }

    return arr.join("")
    
};

//convert("PAYPALISHIRING",3)
convert("AB",1)