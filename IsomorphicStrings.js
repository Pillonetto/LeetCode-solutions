/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. 
 * No two characters may map to the same character, but a character may map to itself.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {

    let sMap = new Array();
    let tMap = new Array();

    for(let i = 0; i < s.length; i++){
        //Compare whether char at s is equal to char a T
        if (sMap[s[i]] != tMap[t[i]]) return false;
        //Assign an arbitrary integer to map chars
        sMap[s[i]] = i+1;
        tMap[t[i]] = i+1;
    }

    return true;
};
