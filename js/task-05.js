// Напиши скрипт який, при наборі тексту в інпут `input#name-input` (подія input),
// підставляє його поточне значення в `span#name-output`. якщо інпут порожній, в
// спані повинен відображатися рядок `'незнайомець'`.

const inputNameRef = document.querySelector("#name-input");
const spanNameRef = document.querySelector("#name-output");

inputNameRef.addEventListener("input", onInput);

function onInput(params) {
  const data = params.target.value;
  spanNameRef.textContent = data.length === 0 ? "незнайомець" : data;
}
