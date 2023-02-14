// let sec = 60,
//     secYear = 365 * 60,
//     age = 34,
//     ageSec = 34 * secYear;





// console.log(ageSec);

const obj = {
  name: 'Alex',
  age: 33,
  height: 176,
  color: {
    ice: 'green',
    hairs: 'blond'
  }
};

// console.log(Object.keys(obj));
for (let value of obj) {
  console.log(value);
}

// const masiv = [1, 2, 'harold', 'age', 6, 10, 20, 100];

// masiv.shift();

// for (let value of masiv) {
//   console.log(value);
// }

const arr = [1,4,2,8,10,22];
arr.sort(sorting);
console.log(arr);

function sorting (a, b) {
  return a+b;
}