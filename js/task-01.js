// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто
// елементів `li.item`. Вийде `'У списку 3 категорії.'`.

// Для кожного елемента `li.item` в списку `ul#categories`, знайде і виведе в
// консоль текст заголовка елемента (тега h2) і кількість елементів в категорії
// (всіх вкладених в нього елементів `li`).

// Наприклад, для першої категорії вийде:

// - Категорія: Тварини
// - Кількість елементів: 4

const catRef = document.querySelector("#categories");

console.log(`У списку ${catRef.children.length} категорії.`);

console.log(
  `Категорія: ${catRef.firstElementChild.firstElementChild.textContent}`
);
console.log(
  `Кількість елементів: ${catRef.firstElementChild.lastElementChild.children.length}`
);

console.log(
  `Категорія: ${catRef.firstElementChild.nextElementSibling.firstElementChild.textContent}`
);
console.log(
  `Кількість елементів: ${catRef.firstElementChild.nextElementSibling.lastElementChild.children.length}`
);

console.log(
  `Категорія: ${catRef.lastElementChild.firstElementChild.textContent}`
);
console.log(
  `Кількість елементів: ${catRef.lastElementChild.lastElementChild.children.length}`
);
