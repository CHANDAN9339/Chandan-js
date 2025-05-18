const accountId = 144553
let  accountEmail = "chandan225@gmail.com"
var accountPassword = "12345"
accountCity = "Bankura"
let accountState;

//accountId = 2   //not allowed

accountEmail = "chandandey20@gmail.com"
accountPassword = "54321"
accountCity = "Kolkata"

console.log(accountId);

/*
prefer not to use var 
beacause of issue in block scope and functional scope 
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
