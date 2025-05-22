console.log ("For the first case")
let score1 = "33"

console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number (score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);


// to convert a string value in number we use let valueInNumber = Number (score)   
// like privious one
// but in case of the score value consist with any char value then this formet is working but the whole number is not a number for this case we have to check 
// let an example 
console.log("For the secound case")
let score2 = "33abc"

console.log(typeof score2);
console.log(typeof(score2));

let valueInNumber2 = Number (score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);  // the output is coming NAN means 'Not a number'



console.log("For the third case")
let score3 = null

console.log(typeof score3);
console.log(typeof(score3));

let valueInNumber3 = Number (score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3); 


console.log("For the forth case")
let score4 = undefined

console.log(typeof score4);
console.log(typeof(score4));

let valueInNumber4 = Number (score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4); 




console.log("For the fifth case")
let score5 = true

console.log(typeof score5);
console.log(typeof(score5));

let valueInNumber5 = Number (score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5); 


console.log("For the sixth case")
let score6 = false

console.log(typeof score6);
console.log(typeof(score6));

let valueInNumber6 = Number (score6)
console.log(typeof valueInNumber6);
console.log(valueInNumber6); 



console.log("For the seventh case")
let score7 = "Chandan"

console.log(typeof score7);
console.log(typeof(score7));

let valueInNumber7 = Number (score7)
console.log(typeof valueInNumber7);
console.log(valueInNumber7); 

console.log("Convert to Boolean")
console.log("For case eight")
let isLoggedIn1 = 1

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)

console.log("For case nine")
let isLoggedIn2 = 0

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

// if there is nothing mean only "" this gives us false
// if there is a string value then the output will come true



console.log("Convert number to String")
console.log("Case ten")
let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)
