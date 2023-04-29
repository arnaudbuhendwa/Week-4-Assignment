//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages); // print out the 8 age elements [3, 9, 23, 64, 2, 8, 28, 93]

//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   

let result = ages[ages.length - 1] - ages[0]; // 3 is first element in the Array
console.log(result); // result equals 90

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic.
ages.push(38);//add a new age to the array
console.log(result); // result equals 35

// 1c. Use a loop to iterate through the array and calculate the average age. 

let sum = 0;

for (let i = 0; i < ages.length; i++) {
   sum += ages[i]; // sum = sum + ages[i]
}
let average = sum / ages.length;
console.log(average); // The average 29.8

// 2. Create an array called names that contains the following values:

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // created an array

//2a. Use a loop to iterate through the array and calculate the average number of letters per name

let totalLetters = 0; // intializes totalLetters beginning at zero
for (let i = 0; i < names.length; i++) {
   totalLetters += names[i].length;
}
let avgLetters = totalLetters / names.length;
console.log(avgLetters); // 3.83

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let concatenatedNames = ''; // intializes concatenatedNames, qoutes let you know it will be a string output
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' '; //the qoutes are a space indicator between names
}
console.log(concatenatedNames); 

// 3. You can access the last element of an array by using the index notation with the length of the array minus one.
// 4. You can access the first element of an array by using index notation with zero as the index.

// 5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = []; //intializes new array

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length); // add the length of the names array to the nameLengths array
}

console.log(nameLengths); // output: [3, 5, 3, 5, 4, 3]

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}
console.log(sum); // Output: 23

//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function repeatWord(word, n) { // word is a string, n is an integer
    let repeatedWord = ''; // initializes an empty string 
    for (let i = 0; i < n; i++) {
      repeatedWord += word; // first loop is repeatedWord = " " + word which assigns whatever word to repeatedWord 
    }
    return repeatedWord;
  }
  
//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
  
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName; // qoutes are used as a space indicator
  }
let firstName = 'Arnaud';
let lastName = 'Solefack';
let fullName = getFullName(firstName, lastName);
console.log(fullName); 

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function sumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) { 
      sum += numbers[i]; // for loop adds each element to the sum
    }
    return sum > 100; // when completed, it returns whether boolean sum is greater than 100
  }

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
  
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
let numbers = [1, 2, 3, 4, 5];
average = calculateAverage(numbers);
console.log(average); 


// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isFirstGreaterThanLast(arr1,arr2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }
  return sum1 / arr1.length > sum2 / arr2.length;
}



//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {  // check if it is hot outside and if the person has more than $10.50 in their pocket.
      return true;
    } else {
      return false;
    }
  }


//13. Create a function of your own that solves a problem. 
function thermostat(currentTemp,targetTemp){
    if (currentTemp < targetTemp){  // if current temp is less than the target temp
        return "The temperature is too cold";
    } else if (currentTemp > targetTemp){ // if current temp is more than the target temp
        return "The temperature is too hot";
    }else { 
        return "The temperature is perfect"; // I created this function to allow user to express perfect temperture.
    }
}
let currentTemp = 10;
let targetTemp = 30;
let thermostatOutput = thermostat(currentTemp,targetTemp)
console.log(thermostatOutput); // Output: The temperature is too cold

currentTemp = 45;
targetTemp = 30;
thermostatOutput = thermostat(currentTemp,targetTemp)
console.log(thermostatOutput); // Output: The temperature is too hot

currentTemp = 30;
targetTemp = 30;
thermostatOutput = thermostat(currentTemp,targetTemp)
console.log(thermostatOutput); // Output: The temperature is perfect