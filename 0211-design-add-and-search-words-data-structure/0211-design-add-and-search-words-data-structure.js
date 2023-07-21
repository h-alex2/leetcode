var WordDictionary = function() {
    this.dictionary = new Set();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.dictionary.add(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if (word.includes(".")) {
        const dictionary = [...this.dictionary];

        for (let i = 0; i < dictionary.length; i++) {
            if (dictionary[i].length !== word.length) continue;
            let hasWord = false;
            
            for (let j = 0; j < dictionary[i].length; j++) {
                if (word[j] !== "." && dictionary[i][j] !== word[j]) {
                    hasWord = false;
                    break;
                } else {
                    hasWord = true;
                }
            }

            if (hasWord) return true;
        }
    }

    return this.dictionary.has(word);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */