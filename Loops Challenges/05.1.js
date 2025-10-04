let citiesPopulation={
    "London": 8900000,
    "New York": 8400000,
    "Berlin": 3500000,
    "Paris": 2200000
}

console.log(Object.keys(citiesPopulation));
console.log(Object.values(citiesPopulation));

let cityPopulation={}

for (const city in citiesPopulation) {
    if(city=="Berlin"){
        continue;
    }
    cityPopulation[city]=citiesPopulation[city];
}
console.log(cityPopulation);
