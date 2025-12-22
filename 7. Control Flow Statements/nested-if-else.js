const age = 22;
const id = false;

if(age >= 18) {
    if(id) {
        console.log("You are Eligible For Voting");
    } else {
        console.log("Insufficient Document");
    }
} else if(age >= 15){
    console.log("Your age is less than 18");
} else {
    console.log("Your are Minor");
}