/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let count = 1;
    let countAndSay = "1";

    while (count !== n) {
        let currentCountAndSay = "";
        let strCount = 0;
        let currentStr = "";

        for (const str of countAndSay) {
            if (currentStr === str) {
                strCount++;
            } else {
                if (strCount) {
                    currentCountAndSay += String(strCount) + currentStr
                }

                currentStr = str;
                strCount = 1;
            }
        }

        currentCountAndSay += String(strCount) + currentStr;
        countAndSay = currentCountAndSay;
        count++;
    }

    return countAndSay;
};
