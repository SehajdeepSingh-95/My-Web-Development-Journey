let obj={
    "firstName":"Sehajdeep",
    lastName:"Singh",
    age:21,
    isactive:true
};
console.log(obj);
console.log(typeof obj);
console.log(obj.valueOf());

const username={
    firstName:"Sehajdeep",
    lastName:"Singh",
    age:21,
    isactive:true
}

username.firstName="Hitesh";
console.log(username);

username.middleName="Chaudhary";
console.log(username);

console.log(obj["firstName"]);
console.log(obj["lastName"]);
console.log(obj["age"]);
console.log(obj["isactive"]);

let today=new Date();
console.log(today);
console.log(typeof today);
console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.getTime());

//Array

let heroes=["Spiderman","Batman","Superman",true];
console.log(heroes);
console.log(typeof heroes);
console.log(heroes[0]);
console.log(heroes[1]);
console.log(heroes[2]);
console.log(heroes[3]);
console.log(heroes.length);

console.log("1"+1);

let isValue=true;
console.log(isValue+1);
