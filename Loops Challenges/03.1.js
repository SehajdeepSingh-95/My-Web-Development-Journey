let Array=[1,2,3,4,5];
let smallNumber=[];

for (const num of Array) {
    if (num==4){
            break;
    }
    else{
        smallNumber.push(num);
        
    }
}
console.log(smallNumber);
