/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const numberArr = String(n).split('');

  for (let i = 0; i < numberArr.length; i++) {
    const x = numberArr.slice();
    x.splice(i, 1);
    arr.push(x.join(''));
  }

  return Math.max(...arr);
}

module.exports = deleteDigit;
