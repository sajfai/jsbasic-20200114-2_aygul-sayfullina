/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (let salary in salaries) {
    if (Number(salaries[salary])) {
      sum += Number(salaries[salary]);
    }
  }
  return sum;
}
