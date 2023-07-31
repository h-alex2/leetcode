/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let idx = 0;
    let maxPosition = 0;
    let target = nums.length - 1;

    while (idx < nums.length) {
        maxPosition = Math.max(maxPosition, idx + nums[idx]);

        if (maxPosition >= target) {
            return true;
        }

        if (maxPosition <= idx && nums[idx] === 0) {
            return false;
        }

        idx++;
    }
};