/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	let left = 0;
	let right = haystack.length - 1;
	let answer = -1;

	while (left <= right) {
		if (haystack[left] === needle[0] && haystack.slice(left, left + needle.length) === needle) {
			answer = left;

			break;
		}

		if (
			haystack[right - needle.length + 1] === needle[0] &&
			haystack.slice(right - needle.length + 1, right + 1) === needle
		) {
			answer = right - needle.length + 1;
		}

		left++;
		right--;
	}

	return answer;
};
