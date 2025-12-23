// Try Catch Block Example 1 

try {
    console.log(err);
} catch(er) {
    console.log("Something Went Wrong")
}


// Example 2

try {
    const isLoggedIn = false;
    if(!isLoggedIn) {
        throw new Error("You are not Logged In");  // Custom Error
    }
} catch(e) {
    console.log("Error Occurred ",e);
} finally {
    console.log("I am Finally Block I always run despite of any error");
}