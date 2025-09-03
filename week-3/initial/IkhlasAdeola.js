// Follow the instructions in the readme file to submit challenges.

// CODING CHALLENGES

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

//My Solution
// Your function here
students.forEach(student => { let getAverage = ({name, scores = [0]}) => {
    let total = 0
    for (let i = 0; i < scores.length; i++) {
        total += scores[i]
    }
    let average = total / scores.length;
  return `${name}'s average score is ${average}`;
}
   console.log(getAverage(student));
});

////////////////////////////////////
// Challenge 2: Merge and Update Profiles
// Given two user profile objects, write a function that merges them using the spread operator.
// If both profiles have the same property, the second profile’s value should overwrite the first.
// The function should also accept a third argument: an object of updates (default to {}), and apply those updates to the merged profile.

const profile1 = { name: 'Jane', age: 25, city: 'Lagos' };
const profile2 = { age: 30, job: 'Engineer' };

// Your function here
const mergeProfiles = (profile1, profile2)=>{
    let combined = {...profile1, ...profile2};
    return combined;
}

console.log(mergeProfiles(profile1, profile2));

//const updatedProfile = mergeProfiles(profile1, profile2, { city: 'Abuja', hobby: 'Reading' });
//console.log(updatedProfile);
//Expected: { name: 'Jane', age: 30, city: 'Abuja', job: 'Engineer', hobby: 'Reading' }

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
let total = 0;
cart.forEach(item => { let getTotal = ({price, quantity = 1}) => {
    return price * quantity;
};
 total += getTotal(item);
});
console.log(total);

// const getTotal = ...

// console.log(getTotal(cart)); // Expected: 44.94

////////////////////////////////////
// Challenge 4: Combine Arrays and Find Max
// Write a function that takes any number of arrays (using rest/spread), combines them into one, and returns the maximum value using destructuring.

// Your function here
const findMax = (...arrays) => {
    let combined = []
    let max = 0
    combined = [].concat(...arrays);
    for (let i =0; i <combined.length; i++){
      if (combined[i]> max){
        max = combined[i];
      }
    }
    return max;
}

console.log(findMax([1, 5, 9], [3, 7], [2, 8, 10])); // Expected: 10
