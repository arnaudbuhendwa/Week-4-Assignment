let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages); // print out the 8 age elements [3, 9, 23, 64, 2, 8, 28, 93]

let lastElement = ages.length - 1; // 93 is the last element in the Array
let result = ages[lastElement] - ages[0]; // 3 is first element in the Array
console.log(result); // result equals 90

//add a new age to the array
ages.push(38);
let result = ages[lastElement] - ages[0]; 
console.log(result); // result equals 35

let ages = [3, 9, 23, 64, 2, 8, 28, 93, 38];
let sum = 0;

for (let i = 0; i < ages.length; i++) {
   sum += ages[i];
}
let average = sum / ages.length;
console.log(average); // The average 29.8

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLetters = 0; // how many letters are in all the names
for (let i = 0; i < names.length; i++) {
   totalLetters += names[i].length;
}
let avgLetters = totalLetters / names.length;
console.log(avgLetters); // 3.83

let concatenatedNames = ''; // intializes empty string
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' '; //the qoutes are for space
}
console.log(concatenatedNames.trim); // .trim makes sure to remove any un-wanted spaces

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length); // add the length of the name to the nameLengths 
}

console.log(nameLengths); // output: [3, 5, 3, 5, 4, 3]

let nameLengths = [3, 5, 3, 5, 4, 3];
let sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}
console.log(sum); // Output: 23

function repeatWord(word, n) {
    let repeatedWord = ''; // initializes an empty string 
    for (let i = 0; i < n; i++) {
      repeatedWord += word;
    }
    return repeatedWord;
  }
  

  function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName; // qoutes are used as a space indicator
  }
let firstName = 'Arnaud';
let lastName = 'Solefack';
let fullName = getFullName(firstName, lastName);
console.log(fullName); 

function sumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) { 
      sum += numbers[i]; // for loop adds each element to the sum
    }
    return sum > 100; // when completed, it reutrns whether boolean sum is greater than 100
  }


  function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
let numbers = [1, 2, 3, 4, 5];
let average = calculateAverage(numbers);
console.log(average); 





function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {  // check if it is hot outside and if the person has more than $10.50 in their pocket.
      return true;
    } else {
      return false;
    }
  }


// I created this function to find the perfect temperature.
function thermostat(currentTemp,targetTemp){
    if (currentTemp < targetTemp){  // if current temp is less than the target temp
        return "The temperature is too cold";
    } else if (currentTemp > targetTemp){ // if current temp is more than the target temp
        return "The temperature is too hot";
    }else { 
        return "The temperature is perfect";
    }
}
let currentTemp = 10;
let targetTemp = 30;
let thermostatOutput = thermostat(currentTemp,targetTemp)
console.log(thermostatOutput);

currentTemp = 45;
targetTemp = 30;
thermostatOutput = thermostat(currentTemp,targetTemp)
console.log(thermostatOutput);