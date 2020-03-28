/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *      ->
 *      25
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.el.innerHTML = getTable(items);
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    const columns = ["name", "age", "salary", "city"];
    const mul = desc ? 1 : -1;
    const sortableItems = items.sort(function (a, b) {
      if (a[columns[column]] > b[columns[column]]) {
        return -1 * mul;
      }
      if (a[columns[column]] < b[columns[column]]) {
        return 1 * mul;
      }
      // a должно быть равным b
      return 0;
    });


    this.el.innerHTML = getTable(sortableItems);
  };
}

function getTable(items) {
  const html = [`<thead><tr><td>name</td><td>age</td><td>salary</td><td>city</td></tr></thead>`];
  for (let i = 0; i < items.length; i++) {
    html.push(`<tbody><tr><td>${items[i].name}</td><td>${items[i].age}</td><td>${items[i].salary}</td><td>${items[i].city}</td></tr></tbody>`
    );
  }
  return html.join("");
}
