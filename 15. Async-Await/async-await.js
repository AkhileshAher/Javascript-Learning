
// Aysnc await function returns a Promise

async function getData2() {
    await setTimeout(()=>{
        console.log("I am async Function");
    },2000);
     console.log("Async Await Function");
}

getData2()
.then(()=>{
    console.log("Resolved Promise");
})

.catch((e)=>{
    console.log("Error Occurred");
})