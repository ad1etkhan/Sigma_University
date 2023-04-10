// 1.Напишите функцию, принимающую строку и число. Поверните в виде
// массива только слова, длина которых превышает число.

// function get_words(str,num) {
//     const words = str.split(" ");

//     const result = words.filter( word => word.lenght > num);

//     return result
// }

// const inputString = "I like studying in Sigma University"

// const maxLenght = 5;

// const wordArray = get_words(inputString, maxLenght);

// console.log(wordArray);


// 2.Напишите функцию, которая возвращает true, если первый переданный
// аргумент (строка) заканчивается вторым аргументом (также строкой).

// function endWith(str1, str2) {
//     return str1.endsWith(str2);
// }

// const inputString1 = "I like studying in Sigma University";
// const inputString2 = "University";

// console.log(endWith(inputString1, inputString2));

// const inputString3 = "Hello, world";
// const inputString4 = "hello";

// console.log(endsWith(inputString3, inputString4));

// 3.Напишите функцию, которая получает массив целых чисел и возвращает
// массив средних значений каждого целого числа и последователя, если он есть.

// function getaverage(arr) {
//     const result = arr.map((num, index) => {
//         const average = (num+(arr[index + 1 ] || 0)) / 2;
//         return average;
//     });

//     result.push(arr[arr.lenght -1]);

//     return result;
// }

// const array = [1, 2, 3, 4, 5, 7, 9]

// const resultArray = getaverage(array);

// console.log(resultArray);


// Создайте функцию, которая принимает строку и возвращает количество
// (количество) гласных, содержащихся в ней.

// function countVowels(str) {

//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     const chars = str.toLowerCase().split('');

//     const vowelsCount = chars.filter(char => vowels.includes(char)).length;
  
//     return vowelsCount;
//   }

//   const inputString1 = "Celebration";
//   const inputString2 = "Palm";
  
//   console.log(countVowels(inputString1));
  
//   console.log(countVowels(inputString2));

// 5.Напишите функцию, чтобы получить копию объекта, где ключи стали
// значениями, а ключи.

// function swap(obj) {
//     const swapObj = {};
  
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         swapObj[obj[key]] = key;
//       }
//     }
  
//     return swapObj;
//   }

//   const inputObj = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};

//   const swapObj = swap(inputObj);
//   console.log(swapObj);

// 6.Ивана Иванова обокрали. Но его вещи были застрахованы на определенную
// сумму. Учитывая украденные вещи и ограничения страховки, верните разницу
// между общей стоимостью этих вещей и пределом политики.

// function calculateDifference(stolenItems, insuranceLimit) {
//     let totalValue = 0;
  
//     for (let item in stolenItems) {
//       if (stolenItems.hasOwnProperty(item)) {
//         totalValue += stolenItems[item];
//       }
//     }
  
//     return Math.max(0, totalValue - insuranceLimit);
//   }

//   const stolenItems1 = { "baseball bat": 20 };
//   const insuranceLimit1 = 5;
//   console.log(calculateDifference(stolenItems1, insuranceLimit1));
  
//   const stolenItems2 = { skate: 10, painting: 20 };
//   const insuranceLimit2 = 19;
//   console.log(calculateDifference(stolenItems2, insuranceLimit2));
  
//   const stolenItems3 = { skate: 200, painting: 200, shoes: 1 };
//   const insuranceLimit3 = 400;
//   console.log(calculateDifference(stolenItems3, insuranceLimit3));

//   7.Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные

// function compareObjects(obj1, obj2) {

//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) {
//       return false;
//     }

//     for (let key of keys1) {
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }
//     }

//     return true;
//   }

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 1, b: 2, c: 3 };
// console.log(compareObjects(obj1, obj2));

// const obj3 = { a: 1, b: 2, c: 3 };
// const obj4 = { a: 1, b: 2, c: 4 };
// console.log(compareObjects(obj3, obj4));


// 8.Создать класс Tiles (кафель), который будет содержать поля с открытым
// доступом: brand, size_h, size_w, price и метод класса getData(). В главной
// функции объявить пару объектов класса и внести данные в поля. Затем
// отобразить их, вызвав метод getData().

// class Tiles {
//     constructor(brand, size_h, size_w, price) {
//         this.brand = brand;
//         this.size_h = size_h;
//         this.size_w = size_w;
//         this.price = price;
//     }

//     get_data() {
//         return `Brand: ${this.brand}, Size (h x w): ${this.size_h} x ${this.size_w}, Price: $${this.price}`;
//     }
// }

// const tile1 = new Tiles("Apex",10, 5, 100)
// const tile2 = new Tiles("Xero",15, 7, 200)

// tile1.brand = "New";
// tile1.size_h = 12;
// tile1.size_w = 6;
// tile1.price = 25;

// tile2.brand = "Old";
// tile2.size_h = 18;
// tile2.size_w = 9;
// tile2.price = 35;

// console.log(tile1.get_data());

// console.log(tile2.get_data());

// 9.Создать класс "Person" со свойствами "name" и "age". Добавить метод
// "sayHello", который будет выводить в консоль сообщение вида "Привет, меня
// зовут Имя, мне Возраст лет". Добавить свойство "hobbies" - массив с хобби.
// Добавить метод "addHobby", который будет добавлять новое хобби в массив
// «hobbies». Создать класс «child», который наследует все свойства и методы
// класса Person». Добавить произвольные свойства и методы. Учесть, что
// некоторые методы и свойства могут быть приватными или защищенными.

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.hobbies = [];
//     }

//     sayHello() {
//         console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
//       }

//       addHobby(hobby) {
//         this.hobbies.push(hobby);
//       }
//     }

//     class Child extends Person {
//         constructor(name, age, school){
//             super(name, age);
//             this.school = school;
//         }

//         sayHello() {
//             console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет и я учусь в ${this.school}.`);
//           }

//           play() {
//             console.log(`Я играю!`);
//           }
//         }
    
//         const person1 = new Person("Иван", 25);
//         person1.sayHello(); 
//         person1.addHobby("плавание");
//         console.log(person1.hobbies);

//         const child1 = new Child("Алексей", 7, "школе");
//         child1.sayHello(); 
//         child1.play(); 
//         child1.addHobby("рисование");
//         console.log(child1.hobbies);



// 10.Создать класс "Shape" со свойством "color". Добавить метод "getColor",
// который будет возвращать цвет фигуры. Создать класс "Rectangle", который
// наследуется от класса "Shape" и добавляет свойства "width" и "height". Добавить
// методы "getArea" и "getPerimeter", которые будут возвращать площадь и
// периметр прямоугольника соответственно. Создать класс "Square", который
// наследуется от класса "Rectangle" и имеет только одно свойство "sideLength".

// class Shape {
//     constructor(color) {
//       this.color = color;
//     }
  
//     getColor() {
//       return this.color;
//     }
//   }
  
//   class Rectangle extends Shape {
//     constructor(color, width, height) {
//       super(color);
//       this.width = width;
//       this.height = height;
//     }
  
//     getArea() {
//       return this.width * this.height;
//     }
  
//     getPerimeter() {
//       return 2 * (this.width + this.height);
//     }
//   }
  
//   class Square extends Rectangle {
//     constructor(color, sideLength) {
//       super(color, sideLength, sideLength);
//       this.sideLength = sideLength;
//     }
//   }
  

//   const shape1 = new Shape("красный");
//   console.log(shape1.getColor());
  

//   const rectangle1 = new Rectangle("синий", 5, 10);
//   console.log(rectangle1.getColor()); 
//   console.log(rectangle1.getArea()); 
//   console.log(rectangle1.getPerimeter());
  
  
//   const square1 = new Square("зеленый", 7);
//   console.log(square1.getColor()); 
//   console.log(square1.getArea()); 
//   console.log(square1.getPerimeter());