// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на
// правильну кількість символів.

// - Скільки символів має бути в інпут, вказується в його атрибуті `data-length`.
// - Якщо введена відповідна кількість, то `border` інпут стає зеленим,   якщо
//   неправильне - червоним.

// Для додавання стилів, використовуй CSS-класи `valid` і `invalid`.

const inputRef = document.querySelector("#validation-input");
const countLetters = Number(inputRef.attributes["data-length"].value);

inputRef.addEventListener("blur", onOutFocus);

function onOutFocus(params) {
  const clName =
    params.target.value.length === countLetters ? "valid" : "invalid";
  params.target.classList.remove("valid");
  params.target.classList.remove("invalid");
  params.target.classList.add(clName);
}
