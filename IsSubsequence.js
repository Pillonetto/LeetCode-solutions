/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some 
 * (can be none) of the characters without disturbing the relative positions of the remaining characters. 
 * (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {

    let sub = 0;

    if(t.includes(s))
        return true;

    for(let i = 0; i < t.length; i++){
        if(t[i] === s[sub])
            sub++;
    }

    if(sub === s.length)
        return true
    
    return false;
    
};
