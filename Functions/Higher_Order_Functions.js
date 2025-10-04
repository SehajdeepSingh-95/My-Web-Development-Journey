function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

function processTeaOrder(TeaFunction){
    return TeaFunction("Earl Tea");
}

console.log(processTeaOrder(makeTea));

function createTeaMaker(){
    return function(typeOfTea){
        return `Making ${typeOfTea}`;
    }
}   

let teaMaker=createTeaMaker();
console.log(teaMaker("Earl Tea"));