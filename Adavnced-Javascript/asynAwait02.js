fetchUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "John Doe", age: 25 }); // ✅ resolve some data
        }, 2000);
    });
};

async function getUserData() {
    try {
        console.log("Fetching user data...");
        const data = await fetchUserData(); // ✅ await the result
        console.log("User data fetched successfully");
        console.log("User data:", data);
    } 
    catch (error) {
        console.log("Error fetching user data", error);
    }
}

getUserData();
