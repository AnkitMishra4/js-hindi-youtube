//let name="ANkit";
//let Registration=678
//console.log(name+Registration+"value"); //ANkit678value
//console.log(`Hi,My name is ${name} and my Registration no is ${Registration}`);
//Hi,My name is ANkit and my Registration no is 678
 let school=new String('Dk.Carmel.res.high.school')
// console.log(school.split(".")); //[ 'Dk', 'Carmel', 'res', 'high', 'school' ]
// console.log(school.length);//25
// console.log(school[0]);//D
// console.log(school.__proto__);//{}
// console.log(school.indexOf('r')); //5
// console.log(school.charAt(7)); //e
let newschool=school.substring(0,5)
console.log(newschool);
let newschool1=school.slice(-8,5)
console.log(newschool1);
var School=school.replaceAll('.','/')
console.log(School);
var School=school.includes('Abhay')
console.log(School);
