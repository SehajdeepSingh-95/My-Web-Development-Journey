let worldCities=[     "London","New York","Berlin","Paris" ]  
let travelCities=[]  

worldCities.forEach(function(cities) {     
    if (cities=="Paris"){         
        return;     
    }     
    travelCities.push(cities);      
}); 
console.log(travelCities);
