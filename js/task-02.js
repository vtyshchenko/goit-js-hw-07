const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// В HTML є пустий список `ul#ingredients`.

// В JS є масив рядків.

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
