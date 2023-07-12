/**
 * @param {number} n
 * @return {number}
 */

// 5분
var climbStairs = function(n) {
    let memo = [1, 2];

    if (n <= 2) {
        return memo[n - 1];
    }

    for (let i = 2; i < n; i++) {
        let temp = memo[1];
        memo[1] = memo[0] + memo[1];
        memo[0] = temp;
    }

    return memo[1];
};
