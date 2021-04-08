/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let found = false;
  let first = 0;
  let last = array.length - 1;
  let index;

  while (found === false && first <= last) {
    const mid = Math.floor((first + last) / 2);
    if (array[mid] === value) {
      found = true;
      index = mid;
    } else if (array[mid] > value) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return index;
}

module.exports = findIndex;
