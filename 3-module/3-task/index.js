/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str
    .split("-")
    .map((x, i) => i > 0 ? x[0].toUpperCase() + x.slice(1) : x)
    .join("")
}
