/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let answer = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            answer++;
        } else {
            if (answer) {
                return answer;
            }
        }
    }

    return answer;
};