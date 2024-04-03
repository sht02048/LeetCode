/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    } 

    const strings = {};

    for (let i = 0; i < s.length; i += 1) {
        const currentString = s[i];
        if (strings[currentString]) {
            strings[currentString] += 1;
            continue;
        } 

        strings[currentString] = 1;
    }

    for (let i = 0; i < t.length; i += 1) {
        const currentString = t[i];

        if (strings[currentString]) {
            strings[currentString] -= 1;
            continue;
        }

        return false;
    }

    return true;
};