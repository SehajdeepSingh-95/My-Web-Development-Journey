function greet(name){
    console.log(`Hello ${name}`);
}

function Person(name,age){
    this.name=name;
    this.age=age;
}

function Car(model,year){
    this.model=model;
    this.year=year;
}

let myCar=new Car("Toyota",2022);
console.log(myCar);

let myNameCar=new Car("Tata",2025);
console.log(myNameCar);

function tea(type){
    this.type=type;
    this.describe=()=>{
        console.log(`The type of tea is ${this.type}`);
    }
}

let lemonTea=new tea("lemon");
lemonTea.describe();

function animal(species){
    this.species=species;
}

animal.prototype.sleep=()=>{
    console.log(`The animal is ${this.species}`);
}

console.log(animal.prototype);

let tiger=new animal("tiger");
tiger.sleep();

function Drink(name){
    if(!new.target){
        throw new Error("Constructor must be called with new");
    }
    this.name=name;
}

let coffee=Drink("Coffee");
