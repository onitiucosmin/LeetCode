/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return (s.match(/(\w+)\s*$/) || [, ''])[1].length;
};