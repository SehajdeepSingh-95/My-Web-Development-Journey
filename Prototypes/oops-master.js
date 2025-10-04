let car={
    tyres:4,
    engine:true,
    model:"2024",
    make:"Toyota",
    start(){
        return `${this.make} car started in ${this.model}`;
    },
    stop(){
        return `${this.make} car stopped in ${this.model}`;
    }
};

function Person(name,age){
    this.name=name;
    this.age=age;
}

let John= new Person("John Doe",30);
console.log(John);

function Animal(type){
    this.type=type;
}

Animal.prototype.makeNoise=function(){
    return `${this.type} makes a noise`;
}

Array.prototype.Sehaj=function(){
    return `Custom method added to Array ${this}`;
}

let arr=[1,2,3,4,5];
console.log(arr.Sehaj());

let arr2=[1,2,3,4,5,6,7,8,9,10];
console.log(arr2.Sehaj());

class Vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    start(){
        return `${this.make} car started in ${this.model}`;
    }
    stop(){
        return `${this.make} car stopped in ${this.model}`;
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make}: This is an inheritance example`;
    }
}

let tesla=new Car("Tesla","2024");
console.log(tesla);
console.log(tesla.drive());
console.log(tesla.start());
console.log(tesla.stop());

let audi=new Vehicle("Audi","2024");
console.log(audi);
console.log(audi.start());
console.log(audi.stop());