//This Keyword

const user={
    name:"Ankit",
    Id:234,
    welcomemessage:function () {
        console.log(`username is ${this.name} , Welcome to Our Website`);
    }
}
//user.welcomemessage()
//user.name="Mishra"
//user.welcomemessage()

//console.log(this);

function login() {
    const username="Ankit";
   // console.log(this.username);
}
login()

const Log=  ()=> {
    let name="Aynkir";
    //console.log(this.name);
}
Log()

const Add= (num1,num2) => {
    return num1+num2
}
//console.log(Add(3,7));

//const AddTwo=(num1,num2) => num1+num2

const AddTwoNumber=(num1,num2) => num1+num2
console.log(AddTwoNumber(77,99));
