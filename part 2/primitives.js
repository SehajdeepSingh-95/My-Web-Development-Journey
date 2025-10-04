//Number

let balance=120;
console.log(balance);
console.log(typeof balance);

let anotherBalance=new Number(120);
console.log(anotherBalance);
console.log(typeof anotherBalance);
console.log(anotherBalance.valueOf());

//boolean

let isLoggedIn=true;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let anotherLoggedIn=new Boolean(true);
console.log(anotherLoggedIn);
console.log(typeof anotherLoggedIn);
console.log(anotherLoggedIn.valueOf());

let isactive=false;
console.log(isactive);
console.log(typeof isactive);
console.log(isactive.valueOf());

//string
let name="chaicode.com";
console.log(name);
console.log(typeof name);

let anotherName=new String("chaicode.com");
console.log(anotherName);
console.log(typeof anotherName);
console.log(anotherName.valueOf());

let newNamr="Hitesh";
console.log(`Hello ${newNamr}`);

//null and undefined
let nullValue=null;
console.log(nullValue);
console.log(typeof nullValue);

let undefinedValue=undefined;
console.log(undefinedValue);
console.log(typeof undefinedValue);

//symbol
let sm1=Symbol();
let sm2=Symbol();
console.log(sm1==sm2);
console.log(sm1===sm2);

console.log(sm1);
console.log(typeof sm1);
console.log(sm1.valueOf());

//named symbol
let sm3=Symbol("Hitesh");
console.log(sm3);
console.log(typeof sm3);
console.log(sm3.valueOf());

let sm4=Symbol("Hitesh");
console.log(sm4);
console.log(typeof sm4);
console.log(sm4.valueOf());

console.log(sm3==sm4);
console.log(sm3===sm4);