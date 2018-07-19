/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p.length==0 && s.length !=0){
        return false
    }
  
    if(s.length==0){
        var jud =true;
        for(var i=0;i<p.length;i++){
            if(p[i] != '*'){
                return false
            }
        }
        return jud
    }
    if(p[0]=='*'){
        return false
    }
   
    var ptr =0
    var str =0
    var char =p[ptr]
    while(ptr !=p.length){
       
        if(s.length == str){
            for(var i=ptr;i<p.length;i++){
                if(p[i] != '*'){
                    return false
                }
            }
        }
        if(p[ptr] ==s[str] || p[ptr]=='.'){
            char =s[++ptr]
            str ++
        }else{
            if(ptr==0 && p[ptr+1]=='*'){
                var temp =1
                
                while (p[ptr+temp] =='*'){
                    temp++
                }
                
                while(char ==s[str]){
                    str++
                }
                
                ptr =ptr+temp
                str++
            }else{
                if(p[ptr]=='*'){
  
                    var temp =0
                    while (p[ptr+temp] =='*'){
                        temp++
                    }
                    while(char ==s[str]){
                        str++
                    }
                    var pt =0
                    while(char ==p[ptr+temp+pt]){
                        pt++
                    }
                    ptr =ptr+temp+pt
                   
                }else{
                    return false
                }
            }

        

        }
    }
    if(str !=s.length){
        return false
    }

    return true
};

console.log(isMatch("aab","c*a*b"))