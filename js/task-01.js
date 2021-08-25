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

for (let i = 0; i < catRef.children.length; i++) {
  const element = catRef.children[i];
  console.log(`Категорія: ${element.children[0].textContent}`);
  console.log(`Кількість елементів: ${element.children[1].childElementCount}`);
}
