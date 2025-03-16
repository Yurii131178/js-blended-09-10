// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector("body");
console.log(bodyEl);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector("#title");
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const navEl = document.querySelector(".list");
console.log(navEl);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const items = document.querySelectorAll("[data-topic]");
console.log(items);
// або
const allItems = document.querySelector(".list");
console.log(allItems.children);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstItem = document.querySelector("[data-topic]");
console.log(firstItem);
// або
const navEl1 = document.querySelector(".list");
console.log(navEl1.firstElementChild); // оскільки наш елемент - це об'єкт,  ми можемо звернутись до його властивостей //

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const navEl2 = document.querySelector(".list");
console.log(navEl2.lastElementChild);
// або (застосуємо властивість "children")      // const list = document.querySelector(".list");

// console.log(list.children);        // HTMLCollection of <li> elements
// console.log(list.children[0]);     // First <li> (Item 1)
// console.log(list.children[1]);     // First <li> (Item 1)
// console.log(list.children[2]);     // Third <li> (Item 3)
// console.log(list.children[3]);     // First <li> (Item 1)
// console.log(list.children.length); // Total child elements (4)

const list = document.querySelector(".list");
const lastItem1 = list.children[3];
console.log(lastItem1);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const siblings = document.querySelector(".container");
console.log(siblings.children);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const headings = document.querySelectorAll("h3");

headings.forEach((h3) => console.log(h3.textContent));

console.log(" ");

// or "for...of"
const headings1 = document.querySelectorAll("h3");
for (const h3 of headings) {
  console.log(h3.textContent);
}
// or "Array.from + .map()"
const headings2 = Array.from(document.querySelectorAll("h3")).map(
  (h3) => h3.textContent
);
console.log(headings2);

// or Spread Operator (...) + map()
const headings3 = [...document.querySelectorAll("h3")].map(
  (h3) => h3.textContent
);
console.log(headings3);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

const headingColor = document.querySelectorAll("h3");

headingColor.forEach((h3) => h3.classList.add("active"));

// add styles to h3 via JS
// headingColor.forEach(h3 => h3.style.color = "red");

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navigationItem = document.querySelector('li[data-topic="navigation"]');
console.log(navigationItem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navigationItem.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const paragraph = navigationItem.querySelector("p");

paragraph.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const topicItem = document.querySelector(`li[data-topic="${currentTopic}"]`);
console.log(topicItem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

topicItem.style.backgroundColor = "cyan";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedHeading = document.querySelector("h3.completed");
console.log(completedHeading);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

const parentLi = completedHeading.parentElement;
parentLi.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const heading = document.querySelector("#title");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
heading.insertAdjacentElement("afterend", newParagraph);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const newItemEl = document.createElement("li");

const newHeadingEl = document.createElement("h3");
newHeadingEl.textContent = "Властивість innerHTML";

const newParagraphEl = document.createElement("p");
newParagraphEl.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

newItemEl.append(newHeadingEl, newParagraphEl);
console.log(newItemEl);

const listEl = document.querySelector(".list");
listEl.append(newItemEl);
console.log(listEl);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

const listEl1 = document.querySelector(".list");

listEl1.insertAdjacentHTML(
  "beforeend",
  `<li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>`
);
// 20 - очисти список
listEl1.innerHTML = "";





