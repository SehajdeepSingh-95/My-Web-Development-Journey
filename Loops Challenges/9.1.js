let numbers=[2,5,7,9]
let doubleNumbers=[];

for (let i=0;i<numbers.length;i++){
    if (numbers[i]==7){
        continue;
    }
    else{
        doubleNumbers.push(numbers[i]*2);
    }
}

console.log(doubleNumbers);