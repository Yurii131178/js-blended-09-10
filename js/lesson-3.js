//Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [[1, 2, 3, 4, 5]]


// const numbers1 = [1, 2, 3, 4, 5];

// // array.method(element=>console.log(element))
// const doubleNumbers = numbers1.map((el) => {
//   return el ** 2;
// });
// console.log(doubleNumbers);



//Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].



// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] }
// ];

// const result = data.flatMap(obj => obj.values);
// console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


//Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const youngerBro = people.some(Bro => Bro.age < 20);

// console.table(youngerBro);

//Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const evenNum = numbers.filter(number => number % 2 === 0) 
    

// console.log(evenNum);

//Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];


// const oddNum = numbers.find(el => el % 2 !== 0);

// console.log(oddNum);


//Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const ascend = numbersArray.toSorted((a, b) => a -b);

// console.log(ascend);

//Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const abc = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(abc);


//Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const age = users.toSorted((a, b) => a.age - b.age);

// console.log(age);



//Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const newArr = user.filter(a => a.age > 20);

// console.log(newArr);
// console.table(newArr);


//Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum);







//Завдання 11:

 // Створи клас для калькулятора, який має такі методи:
 // - метод number, який набуває початкового значення для наступних операцій
 // - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 // - методи add, substruct, divide, multiply
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
// class Calculator {
//     constructor() {
//         this.num = 0;
//     }

//     number(value) {
//         this.num = value;
//         return this;
//     }

//     getResult() {
//         return this.num;
        
//     }

//     add(value) {
//         this.num += value;
//         return this
//     }
        
//     subtract(value) {
//         this.num -= value;
//         return this
//     }

//     divide(value) {
//         this.num /= value;
//     }
//     multiply(value) {

//         this.num *= value;
//     }

// }
// const calculator = new Calculator();
// calculator.number(5).add(3)

// console.log();

//'''''''''''''''//

// тимур
// class Calculator {
//     constructor() {
//         this.num = 0;
    
//     }

//     number(value) {
//         this.num = value;
//         return this
//     }

//     getResult() {
//      return this.num;
//     }

//     add(value) {
//     this.num += value;
//     return this
//     }

//     substruct(value) {
//         this.num -= value;
//         return this

//     }

//     divide(value) {
//         if (value !== 0) {
//             this.num /= value;
//         }
        
//         return this
//     }

//     multiply(value) {
//         this.num *=
// value;
//         return this

//     }


// }
//    const calculator = new Calculator();
//    calculator.number(5).add(3).substruct(5).multiply(7).divide(4).getResult()
//    console.log(calculator.getResult());

//------------------//

//Завдання 12:

 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email
 
// class Client {

//     #login;
//     #email;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }
// }
// const yurii = new Client("Yurii", "78yurkos78@gmail.com");

// console.log(yurii.email);

// yurii.email = "jojoba@gmail.com";

// console.log(yurii.email);

// console.log(yurii.login);

// yurii.login = "Jojoba";

// console.log(yurii.login);


//Завдання 13:

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // ##### Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  //  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  
class Person {

    

    constructor(age, email, gender, name) {

        this.age = age;
        this.email = email;
        this.gender = gender;
        this.name = name;
    }

    getDetails() {
        return { name: this.name, age: this.age, gender: this.gender, email: this.email };        
    
    }
}
  
class Employee extends Person{

    constructor(age, email, gender, name, salary, department) {

        super(age, email, gender, name)
        
        this.salary = salary;
        this.department = department;
    }

    getEmployeeDetails() {
        return { ...this.getDetails(), salary: this.salary, department: this.department}
    }
}

const employee = new Employee(21, "foo@gmail.com", "male", "Frank", 1500, "SalesDep");

console.table(employee.getEmployeeDetails());





