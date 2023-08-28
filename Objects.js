//const User=new Object()// Singleton Object

const user= {} //not-Singleton Object
user.id="123abc"
user.name="Ankit"
user.salary=46500

//console.log(user);

const regularUser={
    email:"rgu@gmail.com",
    password:"123456@",
    uname:{
        Regisname:{
            fname:"Ankit",
            Lname:"Mishra",
        }
    }
}
// console.log(regularUser.email);
// console.log(regularUser.password);
// console.log(regularUser.uname.Regisname.fname);
// console.log(regularUser.uname.Regisname.Lname);
// console.log(regularUser.uname);

//Combibing Multiple Objects

const obj1={1:"Ankit",2:"Mishra"}
const obj2={3:"hello",4:"Hwru"}
//const obj3={...obj1,...obj2}
//console.log(obj3);
const obj3=Object.assign({},obj1,obj2)
//console.log(obj3);

const RegUser=[
    {
        id:1,
        name:"Ankit"
    },
    {
        id:2,
        name:"Mishra"
    },
    {
        id:3,
        name:"Admin"
    }
]
console.log(RegUser[1]);