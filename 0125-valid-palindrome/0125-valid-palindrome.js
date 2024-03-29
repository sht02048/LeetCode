/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const modifiedString = s.toLowerCase().split(" ").join("");
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

    const arr =[] ;

for (let i = 0; i < modifiedString.length; i += 1) {
  if (alphabet.includes(modifiedString[i])) {
    arr.push(modifiedString[i]);
  }
}

const reversed = arr.toReversed();
let result = true;


arr.forEach((alpha, index) => {
  if (alpha !== reversed[index]) {
    result = false;
  }
});

  return result;
};