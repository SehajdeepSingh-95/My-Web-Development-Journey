let chaiArray=["green tea","black tea","chai","oolong tea"]
let newChai=[];
for (let i=0; i<chaiArray.length;i++){
    if (chaiArray[i]=="chai"){
        break;
    }
    else{
        newChai.push(chaiArray[i]);
    }
}
for (let i=0; i<chaiArray.length;i++){
    console.log(chaiArray[i]);
}

console.log(newChai);