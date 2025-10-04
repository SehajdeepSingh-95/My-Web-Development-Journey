let citiesArray=["London","New York","Paris","Berlin"]
let visitedCities=[];
for (let i=0; i<citiesArray.length;i++){
    if (citiesArray[i]=="Paris"){
        continue;
    }
    else{
        visitedCities.push(citiesArray[i]);
    }
}
for (let i=0; i<citiesArray.length;i++){
    console.log(citiesArray[i]);
}

console.log(visitedCities);