// Напиши скрипт створення і очищення колекції елементів. Користувач вводить
// кількість елементів в `input` і натискає кнопку `Створити`, після чого
// рендериться колекція. При натисканні на кнопку `Очистити`, колекція елементів
// очищається.

// Створи функцію `createBoxes(amount)`, яка приймає 1 параметр `amount` - число.
// Функція створює стільки `div`, скільки вказано в `amount` і додає їх в
// `div#boxes`.

// Кожен створений div:

// - Має випадковий rgb колір фону
// - Розміри найпершого div - 30px на 30px
// - Кожен наступний div після першого, повинен бути ширше і вище попереднього на
//     10px

// Створи функцію `destroyBoxes()`, яка очищає `div#boxes`.

const parentDivBoxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls").firstElementChild;

document.addEventListener("click", onClickButton);

function onClickButton(params) {
  if (params.target.dataset.action === "render") {
    createBoxes(inputRef.valueAsNumber);
  }
  if (params.target.dataset.action === "destroy") {
    destroyBoxes();
  }
}

function getRGB() {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  return [r, g, b];
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  // destroyBoxes();

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const [red, green, blue] = getRGB();

    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    boxes.push(div);
    width += 10;
    height += 10;
  }

  parentDivBoxesRef.append(...boxes);
}

function destroyBoxes() {
  parentDivBoxesRef.innerHTML = "";
}
