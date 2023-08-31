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

// function userlogin(username) {
//     if(username===undefined){
//         console.log("Please enter username");
//         return
//     }
//       return  `${username} just logged in`
// }
// console.log(userlogin("Ankit"));

function findCostPrice(num1) {
    return num1
}
console.log(findCostPrice(100));

// Rest Or Sprea Controller(...)
function FindTotalCost(...num1) {
    return num1
}
console.log(FindTotalCost(100,2000,2350));

function FindTotalCost(val1,val2,...num3) {
    return num3
}
console.log(FindTotalCost(100,2000,2350,3200,4500));