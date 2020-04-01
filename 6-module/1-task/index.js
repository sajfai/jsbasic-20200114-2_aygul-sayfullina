/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.el.innerHTML = getTable(data);
    this.el.classList.add("pure-table");
    const table = this.el;
    const x = this;
    table.onclick = function(event) {
      let target = event.target;
      if (target.tagName === "A") {
        x.onRemoved(+target.closest("tr").getAttribute("data-id"));
        target.closest("tr").remove();
      }
    };
  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {}
}

function getTable(items) {
  const html = [`<thead><tr><td>name</td><td>age</td><td>salary</td><td>city</td><td></td></tr></thead>`];
  for (let i = 0; i < items.length; i++) {
    html.push(`<tbody><tr data-id="${items[i].id}"><td>${items[i].name}</td><td>${items[i].age}</td><td>${items[i].salary}</td><td>${items[i].city}</td><td><a href="#delete">X</a></td></tr></tbody>`
    );
  }
  return html.join("");
}

window.ClearedTable = ClearedTable;
