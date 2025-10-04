person=(name)=>{
    this.name=name;
}

person.prototype.greet=()=>{
    console.log(`Hello, my name is ${this.name}`);
}

let Sehaj=new person("Sehaj");
Sehaj.greet();
