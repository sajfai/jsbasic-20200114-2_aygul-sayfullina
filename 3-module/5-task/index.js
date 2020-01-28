/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let copyArr = arr.slice();
  return copyArr
    .filter(item => a <= item && item <= b);
}
