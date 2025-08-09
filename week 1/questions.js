/*

////////////////////////////////////
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


////////////////////////////////////
// Destructuring Arrays
const rgb = [255, 100, 80];
const [red, green, blue] = rgb;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

////////////////////////////////////
// Destructuring Objects
const person = { name: 'Alice', age: 30, job: 'developer' };
const { name, age: personAge, job: personJob } = person;
console.log(`${name} is a ${personAge} year old ${personJob}`);

////////////////////////////////////
// Arrow Functions
const add = (a, b) => a + b;
console.log(`2 + 3 = ${add(2, 3)}`);

const greet = name => `Hello, ${name}!`;
console.log(greet('Moariyo'));

////////////////////////////////////
// Default Parameters
const multiply = (a, b = 2) => a * b;
console.log(multiply(5)); // 10
console.log(multiply(5, 3)); // 15

////////////////////////////////////
// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

const person2 = { ...person, city: 'Lagos' };
console.log(person2);

////////////////////////////////////
// ES6 Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const dog = new Dog('Rex');
dog.speak(); // Rex barks.

////////////////////////////////////
// ES6 Modules (example, not executable in this file)
// In file math.js:
// export const square = x => x * x;
// export default function add(a, b) { return a + b; }
// In another file:
// import add, { square } from './math.js';
// console.log(add(2, 3)); // 5
// console.log(square(4)); // 16

////////////////////////////////////
// Promises
const asyncTask = (shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) resolve('Task succeeded!');
      else reject('Task failed!');
    }, 500);
  });
};
asyncTask(true)
  .then(result => console.log(result))
  .catch(error => console.error(error));

////////////////////////////////////
// Map
const capitals = new Map();
capitals.set('Nigeria', 'Abuja');
capitals.set('France', 'Paris');
console.log(capitals.get('France'));
console.log(capitals.has('Nigeria'));

////////////////////////////////////
// Set
const numbers = new Set([1, 2, 3, 3, 4]);
numbers.add(5);
console.log(numbers); // Set(5) {1, 2, 3, 4, 5}
console.log(numbers.has(3)); // true

////////////////////////////////////
// Symbol
const sym1 = Symbol('desc');
const sym2 = Symbol('desc');
console.log(sym1 === sym2); // false
const obj = { [sym1]: 'value' };
console.log(obj[sym1]);


// CODING CHALLENGES

////////////////////////////////////
// Coding Challenge #1 && // Coding Challenge #2

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// // SOLUTION #1 & #2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
//formulas
const BMI = (massMark / heightMark ** 2).toFixed(2);
const BMIv2 = (massJohn / (heightJohn * heightJohn)).toFixed(2);
//conditional boolean
let higherBMI;
if (BMI > BMIv2) {
	higherBMI = `Mark has higher BMI of ${BMI} than John's ${BMIv2}`;
} else {
	higherBMI = `John has higher BMI of ${BMIv2} than Mark's ${BMI}`;
}
//print result
console.log(higherBMI);

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
// // SOLUTION #3

//variables
const teamDolphins = [109, 95, 123];
const teamKoalas = [97, 112, 101];
//expression to nearest 2decimals
const avgTeamDolphins = (
	(teamDolphins[0] + teamDolphins[1] + teamDolphins[2]) /
	3
).toFixed(2);
const avgTeamKoalas = (
	(teamKoalas[0] + teamKoalas[1] + teamKoalas[2]) /
	3
).toFixed(2);

// conditional if else sttement
let winner;

if (avgTeamDolphins >= 100 && avgTeamDolphins > avgTeamKoalas) {
	winner = `Team Dolphin wins with ${avgTeamDolphins} points while Team Koala loses with ${avgTeamKoalas} points`;
} else if (avgTeamKoalas >= 100 && avgTeamKoalas > avgTeamDolphins) {
	winner = `Team Koala wins with ${avgTeamKoalas} points while Team Dolphin loses with ${avgTeamDolphins} points`;
} else if (
	avgTeamDolphins === avgTeamKoalas &&
	avgTeamDolphins >= 100 &&
	avgTeamKoalas >= 100
) {
	winner = `It is a draw between Team Koala with ${avgTeamKoalas} points and Team Dolphin with ${avgTeamDolphins} points`;
} else {
	winner = "No winner";
}
console.log(avgTeamDolphins);
console.log(avgTeamKoalas);
console.log(winner);
////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
const totalValue = tip + bill

console.log(`Bill value: $${bill}  Tip: $${tip}  Total value: $${totalValue}`)