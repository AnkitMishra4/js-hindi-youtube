let scope=33
console.log(typeof scope); //number
console.log(typeof(scope)); //number

let scope1="33abc"
console.log(typeof scope);//NaN not a number

// true=1  false=0

// let name="Ankit"
// let booleanName=Boolean (name)
// console.log(booleanName);

let str1="Hello"
let str2="Mishra"
let str=str1+str2
console.log(str);

//1.Important point
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined > 0);//false
console.log(undefined < 0);//flase
console.log(undefined == 0);//false

//2.String Concate
console.log(2+2+"Rahul");//4Rahul
console.log("Rahul"+2+2);//Rahul22

//3.Difference between '==' and '===' operator
console.log(2=='2');//true
console.log(2==='2');//false

