/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  let number = 0;

  for (let i = 0; i < s1Arr.length; i++) {
    if (s2Arr.indexOf(s1Arr[i]) >= 0) {
      number++;
      s2Arr.splice(s2Arr.indexOf(s1Arr[i]), 1);
    }
  }

  return number;
}

module.exports = getCommonCharacterCount;
