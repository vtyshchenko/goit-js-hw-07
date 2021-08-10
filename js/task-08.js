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

// ```html
// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>

// <div id="boxes"></div>
// ```

const parentDivBoxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls").firstElementChild;
console.log(`~ inputRef`, inputRef.valueAsNumber);

document.addEventListener("click", onClickButton);

function onClickButton(params) {
  console.log(params.target.dataset.action);
  if (params.target.dataset.action === "render") {
    createBoxes(inputRef.valueAsNumber);
  }
  if (params.target.dataset.action === "destroy") {
    destroyBoxes();
  }
}

function getRGB() {
  const r = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  return [r, g, b];
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  const boxes = [];
  // div
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const [red, green, blue] = getRGB();
    console.log(red, green, blue);
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    boxes.push(div);
    width += 10;
    height += 10;
  }
  console.log(boxes);
  parentDivBoxesRef.append(...boxes);
}

function destroyBoxes() {
  // console.log(parentDivBoxesRef);
  parentDivBoxesRef.innerHTML = "";
}
