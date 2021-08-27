const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Напиши скрипт для створення галереї зображень по масиву даних.

// Використовуй масив об'єктів `images` для створення тегів `img` вкладених в `li`.
// Для створення розмітки використовуй шаблонні рядки і `insertAdjacentHTML()`.

// - Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// - Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.

const styles = document.querySelector("style");

styles.insertAdjacentHTML(
  "beforeend",
  "img {display: block;width: 100%;} .list {list-style: none; align-items: center; justify-content: space-between; display: flex; flex-wrap: wrap; padding-left: 0; padding-right: 0; margin-top: 0;} li {width: 100%; margin-bottom: 10px;}"
);

const ulListRef = document.querySelector("#gallery");
ulListRef.classList.add("list");

let markup = images.map(createGallery).join("");
ulListRef.insertAdjacentHTML("beforeend", markup);

function createGallery({ url, alt }) {
  return `<li><img src='${url}' alt='${alt}'></li>`;
}
