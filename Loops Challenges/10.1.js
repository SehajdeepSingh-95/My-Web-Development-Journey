let teas=["green tea","black tea","chai","oolong tea","earl grey","herbal tea","mint tea","lemon tea"];

for (const tea of teas) {

    if (tea.length>=10){
        continue;
    }
    console.log(tea);
    console.log(tea.length);
    
}

