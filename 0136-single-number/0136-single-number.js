/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const answerObj = {};

    for (let i = 0; i < nums.length; i++) {
        if (answerObj[nums[i]]) {
            delete answerObj[nums[i]];
        } else {
            answerObj[nums[i]] = 1;
        }
    }

    return Object.keys(answerObj)[0];
};
