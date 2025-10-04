let citiesPopulation={
    "London": 8900000,
    "New York": 8400000,
    "Berlin": 3500000,
    "Paris": 2200000
}
let largeCitiesPopulation={}

for (const city in citiesPopulation) {
    if (citiesPopulation[city]>3000000){
        largeCitiesPopulation[city]=citiesPopulation[city];
    }
}   
console.log(largeCitiesPopulation);
