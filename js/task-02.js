const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// В HTML є пустий список `ul#ingredients`.

// ```html
// <ul id="ingredients"></ul>
// ```

// В JS є масив рядків.

// ```js
// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];
// ```

// Напиши скрипт, який для кожного елемента масиву `ingredients` створить окремий
// `li`, після чого вставить всі `li` за одну операцію в список `ul.ingredients`.
// Для створення DOM-вузлів використовуй `document.createElement()`.

const ulListRef = document.querySelector("#ingredients");
const ingredientsRef = [];

ingredients.map((ingradient) => {
  const li = document.createElement("li");
  li.textContent = ingradient;
  ingredientsRef.push(li);
});

ulListRef.append(...ingredientsRef);
