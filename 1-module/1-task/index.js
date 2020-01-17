/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n == 0 || n == 1) 
  {
    return 1;
  } else {
    let firstMultiplier = n;
    let factorial = 1;
    for (let i = 1; i < n; i++) {
      factorial = factorial * (n - i);
    }
    return firstMultiplier * factorial;
  }
}
