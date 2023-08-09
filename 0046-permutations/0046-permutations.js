/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const temp = [];
    const answer = [];

    function DFS(L, sum) {
        if (L === nums.length) {
            answer.push(sum);
            return;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (!temp[i]) {
                    temp[i] = 1;
                    DFS(L + 1, [...sum, nums[i]]);
                    temp[i] = 0;
                }
            }
        }
    }

    DFS(0, []);

    return answer;
};
