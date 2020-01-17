/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let strLength = str.length;
  let threeDotsSimbol = "…";
  if (strLength >= maxlength) {
    return str.slice(0, maxlength - 1) + threeDotsSimbol;
  } else {
    return str;
  }
}
