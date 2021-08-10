// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати
// значення лічильника на `1`.

// - Створи змінну `counterValue` в якій буде зберігається поточне значення
//     лічильника.
// - Створи функції `increment` і `decrement` для збільшення і зменшення значення
//     лічильника.
// - Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

const counterRef = document.querySelector("#value");
const divRef = document.querySelector("#counter");
let counterValue = counterRef.textContent;

const decButton = divRef.firstElementChild;
const incButton = divRef.lastElementChild;

decButton.addEventListener("click", onDecValue);
incButton.addEventListener("click", onIncValue);

function onIncValue() {
  counterValue = Number(counterValue) + 1;
  counterRef.textContent = counterValue;
}
function onDecValue() {
  counterValue -= 1;
  counterRef.textContent = counterValue;
}
