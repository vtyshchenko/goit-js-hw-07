// Напиши скрипт, який реагує на зміну значення `input#font-size-control` (подія
// input) і змінює інлайн-стиль `span#text` оновлюючи властивість `font-size`. В
// результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const textRef = document.querySelector("#text");
const fontSizeControlRef = document.querySelector("#font-size-control");
textRef.style.fontSize = `${fontSizeControlRef.valueAsNumber}px`;

fontSizeControlRef.addEventListener("input", onChangeFont);
console.log(fontSizeControlRef);

function onChangeFont(params) {
  console.log(params);
  textRef.style.fontSize = `${params.target.valueAsNumber}px`;
}
