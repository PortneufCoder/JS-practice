// LARGEST NUMBER CHALLENGE

const arr1 = [5, 8, 2, 1, 5, 7, 3, 4, 5, 8, 1, 2, 4, 8, 3, 1, 4, 5]; // should log 8,2,4,8,2,4,8,4

const arr2 = [15, 26, 74, 12, 3, 6, 9, 1, 2, 5]; // should log 26,74,12,6,2

// Now I want to write some code that will loop through
// the two arrays and send all largest numbers into a new array.

const arr3 = arr1.concat(arr2);

largestNumbers = () => {
  let arr4 = []; // this new array will host the final array
  // arr3 is global, so I have access to it within this function
  let updatedArray = Math.max.apply(null, arr3);
  arr4.push(updatedArray);
  return updatedArray;
};

largestNumbers();

addToNewArray = () => {
  let newValue = largestNumbers();
  console.log(newValue);
  arr5 = [47];
  let pureArray = [];
  pureArray.push(newValue);
  const arr6 = arr5.concat(pureArray);
  console.log(arr6);
  // return arr6;
};
addToNewArray();
// The above code, uses .concat to merge two arrays and then we go on to find the largest number
// then push the result in a new array.

// NUMBER TRIANGLE CHALLENGE
let triangleArray = [1, 22, 333, 4444];

for (let i = 0; i < triangleArray.length; i++) {
  console.log(triangleArray[i]);
  // prints each index on a seperate line
}

// PYRAMID CHALLENGE
createPyramid = rows => {
  for (let i = 0; i < rows; i++) {
    let output = "";
    for (let j = 0; j < rows - i; j++) {
      output += " ";
    }
    for (let k = 0; k <= i; k++) {
      output += "* ";
    }
    console.log(output);
  }
};
createPyramid("5"); //pass number as row of pyramid you want.

personData = [
  "Victor",
  "Shane",
  "Clay",
  "Davide",
  "Francesco",
  "Valentina",
  "Valeria"
];

getPerson = () => {
  for (h = 0; h < personData.length; h++) {
    if (personData[h].charAt(0) === "V") {
      console.log(personData[h]);
    } 
    else if (personData[h].charAt(0) !== "V") {
        console.log('Name not found')
    }
  }
};
getPerson(personData);

