let age=25
console.log(typeof age)
console.log(typeof (age))
let name="r22ef067"
let name2="33"
console.log(typeof name)
console.log(typeof (name));
let valueinNumber=Number(name)
console.log(typeof valueinNumber);
console.log(valueinNumber);//
console.log(Number(name2));
name=null

console.log(Number(name))
name=undefined
console.log(Number(name));

name=false

console.log(Number(name));

//it converts all the values of string into the number data type Number but when if u have not a valid number intialized then the value which will be printed is Nan(Not a number) a special type of number and u can make use of parseInt ,parseFloat etc where if u declared as 33bc or 33.36fc then it will help u in typr conversion while extrcating only the value and leaving behind the string values
let isLogged=1
console.log(Boolean(isLogged));
console.log(typeof(Boolean(isLogged)));
let bol=""
console.log(Boolean(bol));
console.log(typeof(Boolean(bol)));
let bol1="ganavi"
console.log(Boolean(bol1));
console.log(typeof(Boolean(bol1)));

//1=>true 0=>false
//""=.false
//"string"=true

let number=65
console.log(String(number));
console.log(typeof(String(number)));