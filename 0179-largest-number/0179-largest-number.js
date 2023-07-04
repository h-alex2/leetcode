/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function (nums) {
    const strs = nums.map(num => num + "").sort((a, b) => {
        if (a[0] === b[0] && a !== b) {
            return a + b < b + a ? 1 : -1;
        } else {
            return b.localeCompare(a);
        }
    })

    return strs.reduce((acc, cur) => {
        if (acc[0] === "0" && cur === "0") {
            return acc;
        }
        
        return acc + cur;
    }, "");
};
