/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let rowCount = table.rows.length;
  let diag = [];
  for (let i = 0; i < rowCount; i++) {
    diag.push(table.rows[i].cells[i]);
  }
  diag.map(item => item.style.backgroundColor = "red");
}
