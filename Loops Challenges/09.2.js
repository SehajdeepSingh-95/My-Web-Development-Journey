let numbers=[2,5,7,9]

for (let i=0;i<numbers.length;i++){
    if (numbers[i]==7){
        numbers.slice(i,1);
        break;
    }
    else{
        numbers[i]=numbers[i]*2;
    }
}

console.log(numbers);