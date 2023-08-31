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

//Passing an object to a function
const user={
 username:"Ankit",
 Id:497,
}

function Atm(anyobject) {
    console.log(`Name is ${anyobject.username} and Id is ${anyobject.Id}`);
}
//console.log(Atm(user));
//Atm(user)
Atm({
    username: "Abhay",
    Id:457
})

//Passing an Array to a Function as an Argument

const arr=[100,200,400,500]

function FindfirstElement(Arr1) {
    return Arr1[1]
}
//console.log(FindfirstElement(arr));
console.log(FindfirstElement([400,500,300]));
