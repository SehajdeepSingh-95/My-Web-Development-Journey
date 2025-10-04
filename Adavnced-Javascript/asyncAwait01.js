fetchUserData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject({name: "chaicode", url: "https://chaicode.com"});
        },2000)
    })
}
    
async function getUserData(){
    try{
        console.log("Fetching user data...");
        await fetchUserData();
        console.log("User data fetched successfully");
        console.log("User data: ",fetchUserData());
    }
    catch(error){
        console.log(error);
        console.log("Error fetching user data",error);

    }
}

getUserData();


