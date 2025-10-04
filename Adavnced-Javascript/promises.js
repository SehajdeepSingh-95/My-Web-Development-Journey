fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true
            if(success){
                resolve("Data Fetched Successfully");
            }
            else{
                reject("Error:Failed to fetch data");
            }
        },3000)
    })
}

// let response= fetchData()
// console.log(response)

fetchData()
    .then((data)=>{
    console.log(data);
    return "Sehajdeep";
})
    .then((name)=>{
    console.log(name);
})
    .catch((error)=>{
    console.log(error);
})

fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=false;
            if(success){
                resolve("Data Fetched Successfully");
            }
            else{
                reject("Error:Failed to fetch data".toLowerCase());
            }
        },3000);
    })
}

// let response= fetchData()
// console.log(response)

fetchData()
    .then((data)=>{
    console.log(data);
    return "Sehajdeep";
})
    .then((name)=>{
    console.log(name);
})
    .catch((error)=>{
    console.log(error);
})
