const person={
    name:"Sehaj",
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

person.greet();

const greetFunction=person.greet;
greetFunction();

const greetFunctionBind=person.greet.bind({name:"John"});
greetFunctionBind();

const bindGreetFunction=person.greet.bind(person);
bindGreetFunction();
