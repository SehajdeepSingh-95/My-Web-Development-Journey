//Encapsulation

class BankAccount{
    #balance=90;

    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account=new BankAccount();
console.log(account.getBalance());
console.log(account.deposit(100));
//console.log(account.#balance()); will not work as balance is private
console.log(account.getBalance());


//Abstraction

class CoffeeMachine{

    start(){
        return "Coffee is brewing";
    }

    stop(){
        return "Coffee is stopped";
    }

    makeCoffee(){
        return "Coffee is ready";
    }

    PressStartButton(){
        let msg1=this.start();
        let msg2=this.makeCoffee();
        let msg3=this.stop();
        return `${msg1}, ${msg2}, ${msg3}`;
    }
}

let coffeeMachine=new CoffeeMachine();
console.log(coffeeMachine.start());
console.log(coffeeMachine.makeCoffee());
console.log(coffeeMachine.stop());
console.log(coffeeMachine.PressStartButton());

//Polymorphism

class Bird{
    fly(){
        return "flying...";
    }
}

class Penguin extends Bird{
    fly(){
        return "Penguin can't fly";
    }
}

let bird=new Bird();
 let penguin=new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

//static method

class Calculator{
    static add(a,b){
        return a+b;
    }
}

console.log(Calculator.add(2,3));

//Getters and Setters

class Employee{
    constructor(name,salary){
        if (salary<0){
            console.log("Salary cannot be negative");
        }
        else{
            this.name=name;
            this._salary=salary;
        }
    }

    get salary(){
        return `You are not allowed to access salary`;
    }

    set salary(value){
        if (value<0){
            console.log("Salary cannot be negative");
        }
        else{
            this._salary=value;
        }
    }
}

let emp=new Employee("John",10000);
console.log(emp.name);
console.log(emp._salary);
console.log(emp.salary);

let emp2=new Employee("John",-10000);
console.log(emp2.name);
console.log(emp2._salary);
console.log(emp2.salary);

