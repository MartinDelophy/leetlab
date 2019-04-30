[1, 2, 3]
var permuteUnique = function (nums) {
    var res = {};
    var l = nums.length
    function jud(_nums, arr) {
        if (arr.length === l) {
            res[arr.toString()] = 1;
            return;
        }
        for (var i = 0; i < _nums.length; i++) {
            var ptr = _nums.splice(i, 1)[0];
            arr.push(ptr);
            jud(_nums, arr);
            arr.pop();
            _nums.splice(i, 0, ptr);
        }
    }
    jud(nums, []);
    return Object.keys(res).map(e => e.split(",").map(o => parseInt(o)))

};

console.log(permuteUnique([1, 2, 1]));

