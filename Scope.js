
var c=20
let a=70
if(true){
 let a=20;
 var b=30;
 const c=40;
}
console.log(a);
console.log(b);
//console.log(c);

function one() {
   const username="Ankit";

    function two() {
       const password=9876
        console.log(username+password);
    }
    two()
    //console.log(password);
}
one()

//***************************

console.log(one(5));
function one(num1) {
  return num1+7;  
}
//console.log(one(5));

//fun(5)//fun() can't be use before initilization
const fun=function (num2) {
    return num2+14
}
//console.log(fun(7));