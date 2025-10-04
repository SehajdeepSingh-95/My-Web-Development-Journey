let teaCollection=["green tea","black tea","chai","oolong tea","earl grey"];

let availableTea=[];

teaCollection.forEach(function(tea){
    if (tea=="chai"){
        return;
    }
    availableTea.push(tea);
    
});