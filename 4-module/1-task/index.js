/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let list = friends
    .map(item => `<li>${item.firstName} ${item.lastName}</li>`);
  let ul = document.createElement("ul");
  ul.innerHTML = list.join('');
  return ul;
}

