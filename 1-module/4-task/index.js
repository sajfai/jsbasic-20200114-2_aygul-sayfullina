/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strInUpCase = str.toUpperCase();
  return (strInUpCase.includes("1XBET") || strInUpCase.includes("XXX"));
}
