/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const counter = {};

    for (let i = 0; i < nums.length; i++) {
        counter[nums[i]] = counter[nums[i]] + 1 || 1;
    }   

    return Object.entries(counter).sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    }).reduce((acc, [key, val]) => {
        acc.push(...Array.from({length: val}, () => parseInt(key)));

        return acc;
    }, [])
};
