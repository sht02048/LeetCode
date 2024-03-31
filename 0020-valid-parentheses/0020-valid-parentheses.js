/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack  = [];
    const parentheses = {
      "{": "}",
      "[": "]",
      "(": ")",
     };

    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
            stack .push(s[i]);
            continue;
        }

        if (s[i] === parentheses[stack [stack .length - 1]]) {
            stack .pop();
            continue;
        }

        return false;
    }

    if (stack .length === 0) {
        return true;
    }

    return false;
};