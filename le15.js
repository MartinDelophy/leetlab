/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var len =nums.length;
    var right =len-1
    var left =0
    var ret =[]
    nums =nums.sort(function(a,b){ return a-b})
        while(left <right){
            var res=[nums[left],nums[right]];
            var jud =nums[left]+nums[right]
            var temp;
            if(jud >=0){
                temp =left+1
                while(temp<right && nums[temp]<=0){
                    if(jud+nums[temp]==0){
                        res.push(nums[temp])
                    }
                    if(res.length ==3){
                        var res =res.sort();
                        if(ret.length !=0){
                            var t=true;
                            for(var i=0;i<ret.length;i++){
                                
                                if((res[0] == ret[i][0]) && (res[1] == ret[i][1]) && (res[2] == ret[i][2])){
                                    t=false
                                    
                                }
                            }
                            if(t){
                                ret.push(res)
                            }
                        }else{
                            ret.push(res)
                        }
                        
                     break;
                    }
                    temp++
                }
                right--
            }else if(jud<0){
                temp =right-1
                while(temp>left && nums[temp]>=0){
                    if(jud+nums[temp]==0){
                        
                        res.push(nums[temp])
                    }
                    if(res.length ==3){
                
                        var res =res.sort();
                        if(ret.length !=0){
                            var t=true;
                            for(var i=0;i<ret.length;i++){                               
                                if((res[0] == ret[i][0]) && (res[1] == ret[i][1]) && (res[2] == ret[i][2])){
                                    t=false
                                    
                                }
                            }
                            if(t){
                                ret.push(res)
                            }
                        }else{
                            ret.push(res)
                        }
                       break;
                    }
                    temp--
                }
                left++
            }
        }
        return ret
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))