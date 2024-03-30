/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let subsequnce = 0;

    for (let i = 0; i < t.length; i += 1) {
        if (s[subsequnce] === t[i]) {
            subsequnce += 1;
        }
    }

    return subsequnce === s.length;
};