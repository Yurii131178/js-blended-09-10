// Завдання 1:

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
const index = styles.indexOf('blues');
if (index !== -1) {
    styles[index] = 'classic';
}

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        // console.log(i + 1);
        // console.log(array[i]);
        console.log(`${i + 1} - ${array[i]}`);           
    }
}

// законспектовано в зошит

 

// -------------------------------------------------/

// Завдання 2:

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array){
//     let userName = prompt('What is your name?');

//     if (array.includes(userName)) {
//         alert(`Welcome, ${userName}`)
//     } else {
//         alert("User not found")
//     }
// }

// checkLogin(logins);

//=========== option 2 ternar ==========================//

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array){
//     let userName = prompt('What is your name?');

//     alert (array.includes(userName) ? `Welcome, ${userName}`: 'User not found');
// }

// checkLogin(logins);

//=========== option 3 for...of ==========================//


// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array){
//     const userName = prompt('What is your name?');
    
//     for (const login of logins) {
        
//         if (login === userName) {
//             return alert(`Welcome, ${userName}`)
//         }
//     }
//     alert('User not found')
// }

// checkLogin(logins);







// =============================== //

// Завдання 3:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let sum = 0;
//   let counter = 0;

//   for (const argument of arguments) {
//     if (typeof argument === "number") {
//       sum += argument;
//       counter += 1;
//     }
//   }
//   return sum / counter || 0;
// }
// console.log(caclculateAverage(6, 8, 10));

// ============================================== //

// Завдання 4:

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


// newArray = [];
//=============================================//

// function sumAdjacentNumbers(arr) {
//     const newArray = [];
    
//     for (let i = 0; i < arr.length - 1; i++) {
//         newArray.push(arr[i] + arr[i + 1]);
//     }
    
//     return newArray;
// }

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//=========================================================//


// Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// від ментора

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// //   const key = 'mood';
//   user.mood = 'happy';
// //   user['mood'] = 'happy';
// //   user[key] = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;

// //   for (const key in user) {
// //     if (user.hasOwnProperty(key)){
// //         console.log(key);
// //     }
// //   }
// const userKeys = Object.keys(user);
// // console.log(userKeys);

// for (const key of userKeys) {
//     console.log(`${key}: ${user[key]}`);
// }

// const prop = Object.entries(user)
// // console.log(prop);

// for (const pr of prop) {
//     const key = pr[0];
//     const value = pr[1];
//     console.log(`${key}: ${value}`);
// }

//=================================
// ================================

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };


// let salary = Object.values(salaries);
// let sum = 0;  
// for (const value of salary) {
//         sum += value;
// }
// console.log(sum);



// Ігор
// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };

// let salary = Object.values(salaries);
// let sum = 0;
// for (const value of salary){
// sum += value
// }
// console.log(sum)

///===========================///

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().
// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {


// read(a, b){
//     this.a = a;
//     this.b = b;
//     },
    
//     sum() {
//         return this.exist() ? this.a + this.b : "No such propeties";
//     },

//     mult() {
//         return this.exist() ? this.a * this.b : "No such propeties";
//     },

//     exist() {

//         return this.a && this.b;
//     },
    
    
// };



// calculator.read(5, 7);
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());