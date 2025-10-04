let outer=()=>{
    let counter=4;
    return function(){
        counter++;
        return counter;
    }
}

let inner=outer();
console.log(inner());
console.log(inner());
console.log(inner());