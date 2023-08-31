function addTwoNumbers(number1,number2){
    //console.log(number1+number2);

    //let result=number1+number2
    //return result

    return number1+number2
}
const result=addTwoNumbers(3,5);
console.log("Result",result);

// function userlogin(username){
//  return `${username} just logged in`

// }
// console.log(userlogin("Ankit"));

function userlogin(username) {
    if(username===undefined){
        console.log("Please enter username");
        return
    }
      return  `${username} just logged in`
}
console.log(userlogin("Ankit"));
