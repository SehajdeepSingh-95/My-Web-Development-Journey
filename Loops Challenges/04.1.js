let chaiArray=["green tea","black tea","herbal tea","chai","oolong tea"];
let prefferedTea=[];
for (const tea of chaiArray) {
    if (tea=="herbal tea"){
        continue;
    }
    else{
        prefferedTea.push(tea);
    }
}

console.log(prefferedTea);
