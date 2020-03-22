/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let tr of table.querySelectorAll('tbody tr')) {
    const [, ageTd, genderTd, statusTd] = tr.children;
    if (statusTd.hasAttribute("data-available")) {
      if (statusTd.getAttribute("data-available") === "true") {
        tr.classList.add("available");
      } else {
        tr.classList.add("unavailable");
      }
    } else {
      tr.setAttribute("hidden", "true");
    }
    if (genderTd.innerHTML === "m") {
      tr.classList.add("male");
    } else {
      tr.classList.add("female");
    }
    if (ageTd.innerHTML < 18) {
      tr.setAttribute("style", "text-decoration: line-through;");
    }
  }
}
