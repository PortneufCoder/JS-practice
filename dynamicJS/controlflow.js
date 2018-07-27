const readlineSync = require("readline-sync");

welcomeUser = () => {
  let userName = readlineSync.question("Say your name to start the game! >>");
  console.log(`Thanks ${userName}`);
  let registeredName = userName;
  return registeredName;
};

welcomeUser();

getMaxNumber = () => {
  let sentName = welcomeUser();
  let maxNum = readlineSync.question("Choose a number if you dare! >>");
  console.log(`${sentName} your maximum number is ${maxNum}`);
  let userChoice = parseInt(maxNum);
};

getMaxNumber();
