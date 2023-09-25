'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';
//   movements.forEach(function (move, index) {
//     const type = move > 0 ? `deposit` : `withdrawal`;
//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       index + 1
//     } ${type}</div>

//         <div class="movements__value">${move}€</div>
//       </div>
//     `;
//     containerMovements.insertAdjacentHTML(`afterbegin`, html);
//   });
// };
// displayMovements(account1.movements);

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);

// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, currVal) => (acc += currVal), 0);
//   labelBalance.textContent = `${balance} EUR`;
// };
// calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// making a shallow copy
console.log(arr.slice());

// SPLICE method - splice mutates original array (maimnly used to delete elements in an array)
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE Method - also mutates array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['e', 'd', 'c', 'b', 'a'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT Method
const letters = arr.concat(arr2);
console.log(letters);
// also works like this
console.log([...arr, ...arr2]);

// JOIN Method
console.log(letters.join('-'));

*/

///////////////////////////////////////
/* The new 'at' Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log('tony'.at(-1));

*/

///////////////////////////////////////
/* Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Deposit ${i + 1}: `, movement);
  else console.log(`Withdraw ${i + 1}: `, movement);
}

// for each
console.log('--------FOR EACH---------');
// first element must be in correct order (first - currentElement, second - currentIndex, third - always the entire array being looped over  )
movements.forEach(function (movement, i, arr) {
  if (movement > 0) console.log(`Deposit ${i + 1}: `, movement);
  else console.log(`Withdraw ${i + 1}: `, movement);
});

// when to use forEach, you cannot break out of a forEach Statement. Always loops over the entire array
*/

///////////////////////////////////////
/* forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (currentValue, key, entireMap) {
  console.log(`${key}: ${currentValue}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
function checkDogs(julia, kate) {
  // 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
  const jDogs = julia.slice(1, -1);
  // 2. Create an array with both Julia's (corrected) and Kate's data
  const all = jDogs.concat(kate);
  // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  for (const [index, dogAge] of all.entries()) {
    console.log();
    // A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
    if (dogAge >= 3)
      console.log(
        `Dog number ${index + 1} is an adult and is ${dogAge} years old`
      );
    else
      console.log(
        `Dog number ${index + 1} is a puppy and is ${dogAge} years old`
      );
  }
}

const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];
checkDogs(juliaDogs, kateDogs);
*/

///////////////////////////////////////
/* The map Method
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD1 = movements.map(function (move) {
//   return move * eurToUsd;
// });

const movementsUSD2 = movements.map(move => move * eurToUsd);
console.log(movements);
console.log(movementsUSD2);

const movementsUSDfor = [];
for (const move of movements) {
  movementsUSDfor.push(move * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Deposit ${i + 1}: ${mov}`;
  } else {
    return `Withdraw ${i + 1}: ${Math.abs(mov)}`;
  }
});

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
console.log(movementsDescriptions);
*/

///////////////////////////////////////
/* The filter Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawal = movements.filter(mov => mov < 0);
console.log(movements);
console.log(withdrawal);
*/

///////////////////////////////////////
/* The reduce Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator is like snowball effect
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   acc += curr;
//   return acc;
// }, 0);
const balance = movements.reduce((acc, curr) => (acc += curr), 0);

console.log(balance);
let total = 0;
for (const num of movements) {
  total += num;
}
console.log(total);

// Maximun value
const maxValue = movements.reduce(function (max, curr) {
  if (max > curr) {
    return max;
  } else {
    return curr;
  }
}, movements[0]);

console.log(maxValue);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order
const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];
function calcAverageHumanAge(ages) {
  // 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
  const humanAges = ages.map(function (age) {
    if (age <= 2) {
      return age * 2;
    } else {
      return (age = 16 + age * 4);
    }
  });
  console.log(humanAges);
  // 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
  const youngDogs = humanAges.filter(function (age) {
    if (age < 18) {
      return age;
    }
  });
  console.log(youngDogs);
  // 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
  const avgHumanAge = humanAges.reduce(function (acc, curr, i, arr) {
    return acc + curr / arr.length;
  }, 0);
  console.log(avgHumanAge);
}

/*
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
/
calcAverageHumanAge(ages1);
*/
