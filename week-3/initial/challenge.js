// FOllow the instructions in the readme file to submit challenges.

////////////////////////////////////
// Challenge 1: Student Scores
// You have an array of student objects, each with a name and an array of scores.
// Write an arrow function that takes a student object, uses destructuring to get the name and scores, and returns a string like:
// "Alice's average score is 85"
// Bonus: Use a default parameter for scores (default to [0] if missing).

const students = [
  { name: 'Alice', scores: [80, 90] },
  { name: 'Bob', scores: [70, 75, 85] },
  { name: 'Charlie' } // no scores
];

// Your function here
// const getAverage = ...

students.forEach(student => {
  // console.log(getAverage(student));
});

////////////////////////////////////
// Challenge 2: Merge and Update Profiles
// Given two user profile objects, write a function that merges them using the spread operator.
// If both profiles have the same property, the second profile’s value should overwrite the first.
// The function should also accept a third argument: an object of updates (default to {}), and apply those updates to the merged profile.

const profile1 = { name: 'Jane', age: 25, city: 'Lagos' };
const profile2 = { age: 30, job: 'Engineer' };

// Your function here
// const mergeProfiles = ...

const updatedProfile = mergeProfiles(profile1, profile2, { city: 'Abuja', hobby: 'Reading' });
// console.log(updatedProfile);
// Expected: { name: 'Jane', age: 30, city: 'Abuja', job: 'Engineer', hobby: 'Reading' }

////////////////////////////////////
// Challenge 3: Shopping Cart Total
// Write an arrow function that takes a cart array of items (each item is an object with name, price, and optional quantity),
// uses destructuring and default parameters (default quantity to 1), and returns the total price.

const cart = [
  { name: 'Book', price: 12.99, quantity: 2 },
  { name: 'Pen', price: 1.99 }, // quantity missing
  { name: 'Notebook', price: 5.49, quantity: 3 }
];

// Your function here
// const getTotal = ...

// console.log(getTotal(cart)); // Expected: 44.94

////////////////////////////////////
// Challenge 4: Combine Arrays and Find Max
// Write a function that takes any number of arrays (using rest/spread), combines them into one, and returns the maximum value using destructuring.

// Your function here
// const findMax = ...

// console.log(findMax([1, 5, 9], [3, 7], [2, 8, 10])); // Expected: 10
