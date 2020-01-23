/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let newStr = str
    .split(/ |,/)
    .filter(item => (!isNaN(parseFloat(item))))
    .map(item => parseFloat(item, 10));
  return {min: Math.min(...newStr), max: Math.max(...newStr)};
}
