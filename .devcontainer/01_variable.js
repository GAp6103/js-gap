const accountId = 144553
let accountEmail = "parkhedkarg@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate
//accountId = 2

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
accountEmail = "abc@gmail.com"
accountPassword = "54321"
accountCity = "surat"

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])