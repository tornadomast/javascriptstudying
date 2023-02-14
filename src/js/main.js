"use strict";
// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
//   }
// } 
// start();

// const personalMovies = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms () {
//   for( let i=0; i < 2; i++) {
//     const a = prompt('Який останній фільм передивлялись?', '').trim(),
//           b = prompt('На скільки балів оцінюєте?', '');
          
//       if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {
//         personalMovies.movies[a] = b;
//         console.log('done');
//       }
//          else {
//           console.log('error');
//           i--;
//          }
//   }
// }
// rememberMyFilms();

//   function detectPersonalLevel() {
//     if (personalMovies.count < 10) {
//       console.log('Переглянуто мало фільмів');
//     }
//         else if (personalMovies.count >=10 && personalMovies.count <=30) 
//         {
//           console.log('Ви класичний глядач');
//         }
//         else if (personalMovies > 30) {
//           console.log ('ви кіноман, Вітаю!');
//         }
//         else {console.log ('error');
//       }
//   }
//   detectPersonalLevel();

//   function showMyDB (hidden) {
//     if (!hidden) {
//       console.log('personalMovies');
//     }
//   }

//   showMyDB(personalMovies.privat);

//   function writeYouGenres () {
//     for (let i = 1; i <= 3; i++) {
//       personalMovies.genres[i-1] = prompt(`Ваш улюбленний жанр під номером ${i}`);
//     }
//   }
//   writeYouGenres();

// console.log(personalMovies);


// //площа куба

// function cube(num) {
//   let volume = 0,
//       area = 0;
//       volume  = num * num * num;
//       area = 6 * (num * num);
//       return `обєм куба ${volume} площа куба ${area}`;
// }
// console.log(cube(5));

// //номер места в купе




// function getTimeFromMinutes(minutesTotal) {
//   if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//       return "Ошибка, проверьте данные";
//   }

//   const hours = Math.floor(minutesTotal / 60);
//   const minutes = minutesTotal % 60;

//   let hoursStr = '';

//   switch (hours) {
//       case 0: 
//           hoursStr = 'часов';
//           break;
//       case 1:
//           hoursStr = 'час';
//           break;
//       case 2:
//       case 3:
//       case 4:
//           hoursStr = 'часа';
//           break;
//       default:
//           hoursStr = 'часов';
//   }

//   return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(20));

// function fib(num) {

// }
// //конвернер валют


// // const currUsd = 40.3;
// // const currEur = 43.15;
// // let money = +prompt('введіть суму яку хочете обміняти');
// //   function convert(val, course) {
// //     return (val * course);
// // }
  
// // convert(money, currUsd);
// // convert(money, currEur);
// // const resUsd = convert(money, currUsd),
// //       resEur = convert(money, currEur);

// // alert('доллар ' + resUsd + 'грн' + '\n' + 'євро ' + resEur + 'грн');


// // function sayHello(names) {
// //   return `привет, ${names}!`;
// // }
// // console.log(sayHello('Антон')); 

// // function returnNeighboringNumbers(a) {
// //   return [a - 1, a, a + 1];
// // }
// // console.log(returnNeighboringNumbers(5)); 

// // function getMathResult(a, b) {
// //   return (`${a}---${b}`);
// // } 
// // console.log(getMathResult(2, 2));

// // let number1 = +prompt('enter nuber');
// // let number2 = +prompt('enter nuber');
// // function getMathResult(num, times) {
// //   if (typeof(times) !== 'number' || times <= 0) {
    
// //       return num;
      
// //   }
// //   let str = '';
// //   for (let i = 1; i <= times; i++) {
// //       if (i === times) {
// //           str += `${num * i}`;
// //           // Тут без черточек в конце
// //       } else {
// //           str += `${num * i}---`;
// //           // Это тоже самое, что и
// //           // str = str + num * i + "---"
// //       }
// //   }

// //   return str;
// // }
// // console.log(getMathResult(number1, number2));
// // const hamburger = 17,
// //       cola = 0;

// // if (hamburger || fries == 2 && cola) {
// //   console.log('pohavali');
// // }
// //   else {
// //     console.log('go away');
// //   }

// // let star = '';
// // const lenght = 10;
// // for (let i = 0; i < lenght; i++) {
// //   for (let j = 0; j<lenght - i; j++) {
// //     star += ' ';
// //   }
  
// //   for (let j = 0; j < 2 * i + 1; j++) {
// //       star += "*";
// // }
// // star += "\n";
// // }
// // console.log(star);

// // for (let i=2; i<12; i++) {
// //   if(i % 2 == 0){
// //     console.log(i);
// //   }
// // }


// // for (let i=20; i>9; i--) {
// //   if(i===13) break;
// //     console.log(i);
// // } 

// // for (let i = 2; i <= 16; i++) {
// //   if (i % 2 === 0) {
// //       continue;
// //   } else {
// //       console.log(i);
// //   }
// // }

// // const array = [];

// // for (let i=5; i<11; i++) {
// //   array[i-5]=i;
// // }
// // console.log(array);

// const option = {
//   names: 'test',
//   haight: 1024,
//   weight: 768,
//   color: {
//     text: 'red',
//     bg: 'black',
//     shadow: {
//       lines: 'pink',
//       text: 'white'
//     }
//   }
// };

// // for (let key in option) {
// //   if (typeof(option[key]) === 'object') {
// //     for (let i in option[key]) {
// //       console.log(`свойстово ${i} имеет значение ${option[key][i]}`);
// //     }
// //   }
// //   else {
// //     console.log(`свойстово ${key} имеет значение ${option[key]}`);
// //   }
// // }
// const {lines, text} = option.color.shadow; 
// console.log(`цвет линии ${lines} цвет текста ${text}`);

// const arr = prompt('', '');
// const str = arr.split(",");

// const arr = [1, 2, 4, 3, 5, 10, 1, 30, 99, 33];
// arr.sort(sorting);
// function sorting(a, b) {
//   return a-b;
// }
// arr.forEach(function(a, b, name) {
// console.log(`всередині массиву ${name} є порядковий номер ${b} з числом ${a}`);
// });
// console.log(arr);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// //копирование обьекта
// const objOld = {
//   a: 1,
//   b: 2
// };

// const objNew = {
//   c: 3,
//   d:4,
//   level: {
//     s: 3,
//     f: 4
//   }
// };
// console.log(Object.assign(objOld, objNew));

// const num = [2, 4, 7, 8];
// log(...num);
// console.log(log);


// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%',
//           node: '33%'
//       },
//       exp: '1 month'
//   }
// };
// function showPeter(plan) {
//   let str = '';
//   const {programmingLangs} = plan.skills; 
//   for (let key in programmingLangs) {
//     str += `Язык ${key} изучен на ${programmingLangs [key]}\n`;
//   }
//   return str;
// }
// console.log(showPeter(personalPlanPeter));

// function showExperience(p) {
//   const {exp} = p.skills;
//   return exp;
// }

// console.log(showExperience(personalPlanPeter));



// const arr = [1, 3, 'Sarah', 33, true];
// arr.sort();
// const qwer = arr.split('');
// console.log(qwer);


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   if (arr.length !==0) {
//     return `Семья состоит из: ${arr.join(' ')}`;
//   }
//   else {
//     return 'nothon';
//   }
// }
// console.log(showFamily(family));



// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// // function standardizeStrings(arr) {
// //     const str = arr.join('\n');
// //     return (str.toLowerCase());
// // }

// function standardizeStrings(arr) {
//   arr.forEach(function(n) {
//     console.log((n).toLowerCase());
//   } );
// }
// console.log(standardizeStrings(favoriteCities));


// const someString = 'This is some strange string';

// function reverse(str) {
// if (typeof(str) == 'string') {
//   return str.split('').reverse().join('');
  
// } else {
//   return 'error';
// }
// }

// console.log(reverse(someString));


  let amountInput = document.getElementById('amount');
  let convertedValue = document.getElementById('converted-value');
  let amountInputUah = document.getElementById('amountUah');
  let convertedValueUsd = document.getElementById('converted-valueUsd');
  let exchangeRateUsd = 36.74; // UAH per USD
  let exchangeRateUah = 0.027;// USD per UAH

  amountInput.addEventListener('input', function() {
    let amount = this.value;
    let uah = amount * exchangeRateUsd;
    convertedValue.value = uah;
  });
  amountInputUah.addEventListener('input', function() {
    let amountuah = this.value;
    let usd = amountuah * exchangeRateUah;
    convertedValueUsd.value = usd;
  });

  

  
