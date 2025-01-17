// https://leetcode.com/problems/longest-common-prefix/

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let input = strs.filter(word => word.length <= 200)
    if (!input.length) {
        return "";
    }
    let minLen = input[0].length;
    let minI = 0;
    input.forEach((word, i) => {
        if (word.length < minLen) {
            minLen = word.length;
            minI = i;
        }
    })
    let shortest = input[minI];
    let prefixLen = 0;
    let prefix = "";
    for (let i = prefixLen + 1; i <= shortest.length; i++) {
        let curPref = shortest.substring(0, i);
        let wordsWithPref = input.filter(word => word.startsWith(curPref));
        if (wordsWithPref.length !== input.length) {
            return prefix;
        }
        prefix = curPref;
    }
    return prefix;
};


console.log(longestCommonPrefix([""]))
console.log(longestCommonPrefix(["", 'b']))
console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
