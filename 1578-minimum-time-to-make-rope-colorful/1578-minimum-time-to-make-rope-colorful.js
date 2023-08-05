/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let left = 0;
    let prevIdx = -1;
    let answer = 0;

    while (left < colors.length) {
        if (colors[left] === colors[left + 1]) {
            const currentTime = prevIdx >= 0 ? neededTime[prevIdx] : neededTime[left];
            answer += Math.min(currentTime, neededTime[left + 1]);
            prevIdx = currentTime < neededTime[left + 1]
                ? left + 1
                : prevIdx >= 0 ? prevIdx : left;
        } else {
            prevIdx = -1;
        }

        left++;
    }

    return answer;
}
