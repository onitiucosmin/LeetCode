/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var i = s.length-1;
    var length = 0;
    while(i >= 0){
        if(s[i] != " "){ //in the top while loop we move from the back until we get a character which isn't a space
            while(i >= 0 && s[i] != " "){ //at this point we have the last letter of the last word. length += 1 until we hit another space or the string is done
                length += 1;
                i -= 1;
            }
            return length;
        }
        i -= 1;
    }
};