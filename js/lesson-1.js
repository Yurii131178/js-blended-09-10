// Завдання 1:

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().
// =====================================================//
// const number = Number(prompt('Enter number'));

// -------------option 1------------------- //
// if (number === 10) {
//   alert('Вірно');
// } else {
//   alert('Невірно');
// }

// -------option 2(тернарник)------------- //
// number === 10 ? alert('Вірно') : alert("Невірно");

// ----option 3 (спрощений тернарник)----- //
// alert(number === 10 ? 'Вірно' : 'Невірно');

// =============================================== //

// ----------cамостійна задача-------------- //

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min <= 15) {
//   alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//   alert(`${min} входить в другу чверть`);
// } else if (min <= 45) {
//   alert(`${min} входить в третю чверть`);
// } else {
//   alert(`${min} входить в четверту чверть`);
// }

// ===================================================== //
// ---------------задача 3------------------------- //

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// ================================================================== //
// const num = prompt("Введіть значення від 1 до 4");
// let result;
// switch (num) {
//   case "1":
//     result = "зима";
//     break;
//   case "2":
//     result = "весна";
//     break;
//   case "3":
//     result = "літо";
//     break;
//   case "4":
//     result = "осінь";
//     break;
//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }
// console.log(result);
// =================================================== //

// задача 9

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// ========================================================================= //
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// -------------option 1------------------- //

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     const checkAge = confirm('Are you adult?');
//     return checkAge;
//   }
// }

// console.log(isAdult(17));

// -------------option 2------------------- //

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     // можемо прибрати це  // const checkAge = .... return checkAge; // і додати confirm('Are you adult?');
//     return confirm("Are you adult?");
//   }
// }

// console.log(isAdult(17));

// -------------option 3------------------- //

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   }
//   return confirm("Are you adult?");
// }

// console.log(isAdult(17));

// -------------option 4 тернарник------------------- //

// function isAdult(age) {
//   return age >= 18 ? true: confirm("Are you adult?");
// }

// console.log(isAdult(17));

// -------------option 5 || (або)------------------- //

// function isAdult(age) {
//   return age >= 18 || confirm("Are you adult?");
// }

// console.log(isAdult(17));

// =========================================================//

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     if (a > b) {
//       return b;
//     } else {
//       return a;
//      }
//   } else {
//     return "Not a number"
//    }
// }
// console.log(min(13, 7));

// console.log(min(21, 24));

// megalong ineffective and irritating code))) //

// ================  !== і тернарник  ==========================//

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number"
//   }
//   return a > b ? b : a;
// }

// console.log(min(13, 7));

// console.log(min(21, 24));

// console.log(min(0, 1));

// =============== Math.min(a, b) ======================== //

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number"
//   }
//   return Math.min(a, b);
// }

// console.log(min(13, 23));

// console.log(min(5, 24));

// console.log(min(7, 98));

// ================ shortest version || + ternar ==================== //

// function min(a, b) {
//   return (typeof a !== "number" || typeof b !== "number") ? "Not a number" : Math.min(a, b);
// }

// console.log(min(13, 23));

// console.log(min(5, 24));

// console.log(min("7", 98));

// ==================================================================//

// 7

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getNumbers(23, 40));

// ============================================== //

// Завдання 6:

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let count = 0;
// while (count <= 20) {
//   console.log(count);
//   count += 1;
// }

// ==================================================== //

//Завдання 10:

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

//
// =====================================================================

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(18);

// ============== switch option 1 ========================= //

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     switch (true) {
//       case i % 3 === 0 && i % 5 === 0:
//         console.log("fizzBuzz");
//         break;
//       case i % 3 === 0:
//         console.log("fizz");
//         break;
//       case i % 5 === 0:
//         console.log("buzz");
//         break;
//       default:
//         console.log(i);
//     }
//   }
// }

// fizzBuzz(18);

// ====================ternar========================= //

// function fizzBuzz(num) {
//   for (let i = 0; i <= num; i++) {
//     console.log(
//       i % 3 === 0 && s % 5 === 0
//         ? "fizzBuzz"
//         : i % 5 === 0
//         ? "buzz"
//         : i % 3 === 0
//         ? "fizz"
//         : i
//     );
//   }
// }

// fizzBuzz(18);
//
//=======================================================//
// Завдання 5:

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"
// const correctPassword = `${"Я головний"}`;
// const login = prompt("логін:");


// ======================================== //

// const login = prompt('логін:');
// console.log(login);
// if (login === 'Адмін') {
//   const password = prompt('пороль:');
  
//   const correctPassword = 'Я головний';
//   if (password === correctPassword) {
//     alert('Добрий день!')
//   } else {
//     alert('Невірний пароль!')
//   }
// }

// else if (login === '' || login === null) {
//     alert('Скасовано')
// } else {
//   alert('я вас не знаю')
// }

// =================== option 2 тернарник==================== //

// const login = prompt('логін');
// if (login === 'Адмін') {
//   alert(prompt('Пароль') === 'Я головний' ? 'Дорий день' : 'Невірний пароль');
// } else {
//   alert(!login ? 'Скасовано' : 'https://music.youtube.com/search?q=%D0%BA%D0%BE%D0%B7%D0%B0%D0%BA+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC+%D0%BC%D0%B0%D0%BD%D1%96%D1%84%D0%B5%D1%81%D1%82')
// }

// =================================================== //
// задача 4

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>


// let totalMinutes = prompt("Введіть кількість хвилин:");
// totalMinutes = Number(totalMinutes); // Перетворюємо введене значення на число

// if (!isNaN(totalMinutes) && totalMinutes >= 0) {
//   let hours = Math.floor(totalMinutes / 60);
//   let minutes = totalMinutes % 60;

//   let formattedTime = String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");

//   console.log(formattedTime);
// } else {
//     console.log("Будь ласка, введіть коректне число!");
    
// }

// Як це працює:

// prompt запитує у користувача число.
// Math.floor(minutes / 60) обчислює години.
// minutes % 60 знаходить залишок хвилин.
// .padStart(2, '0') додає нуль попереду, якщо число має лише одну цифру.
// Виводиться відформатований час у форматі HH:MM.

//==================роз'яснення=====================//

// Розберемо цей рядок коду детально:

// javascript
// Copy
// Edit
// const formattedTime = String(hours).padStart(2, '0') + ":" + String(remainingMinutes).padStart(2, '0');
// Цей вираз форматує години та хвилини у вигляді HH:MM (наприклад, "01:05" замість "1:5"). Давайте розберемо його частинами:

// 🔹 1. Перетворення числа у рядок
// javascript
// Copy
// Edit
// String(hours)
// hours — це число (наприклад, 1 або 12).
// String(hours) перетворює його на рядок ("1" або "12").
// Це потрібно, оскільки padStart() працює лише з рядками.
// Аналогічно:

// javascript
// Copy
// Edit
// String(remainingMinutes)
// remainingMinutes — це число (наприклад, 5 або 10).
// String(remainingMinutes) перетворює його на рядок ("5" або "10").
// 🔹 2. Додавання ведучого нуля (padStart(2, '0'))
// javascript
// Copy
// Edit
// String(hours).padStart(2, '0')
// .padStart(2, '0') означає:
// Якщо рядок має довжину менше 2 символів, додати 0 перед ним.
// Якщо рядок уже має 2 символи або більше, нічого не змінювати.
// Приклади:
// javascript
// Copy
// Edit
// "1".padStart(2, '0');  // "01"
// "12".padStart(2, '0'); // "12" (не змінюється)
// Те ж саме працює для хвилин:

// javascript
// Copy
// Edit
// String(remainingMinutes).padStart(2, '0')
// "5".padStart(2, '0') → "05"
// "10".padStart(2, '0') → "10"
// 🔹 3. Формування остаточного рядка
// javascript
// Copy
// Edit
// String(hours).padStart(2, '0') + ":" + String(remainingMinutes).padStart(2, '0')
// + ":" + вставляє двокрапку : між годинами та хвилинами.
// Отримуємо рядок формату "HH:MM".
// 🔹 Приклади роботи
// hours	remainingMinutes	Вираз	Результат
// 1	5	"01" + ":" + "05"	"01:05"
// 9	30	"09" + ":" + "30"	"09:30"
// 12	0	"12" + ":" + "00"	"12:00"
// 📌 Підсумок
// Перетворюємо години та хвилини у рядки → String(hours), String(remainingMinutes).
// Додаємо 0 перед однозначними числами → .padStart(2, '0').
// Об’єднуємо години, двокрапку та хвилини → + ":" +.
// У результаті отримуємо форматований час у вигляді HH:MM.

