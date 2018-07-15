
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.indexOf(ransomNote)>-1){
        return true
    }
    return false
};
console.log(canConstruct("aaa", "ab"))