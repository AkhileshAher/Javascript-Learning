
let secondPromise = new Promise((res, rej) => {
    let bool = true;
    if (bool) {
        console.log("Executed and Resolved");
        res(100);
    } else {
        console.log("Rejected");
        rej("Something error");
    }
});

secondPromise.then((data) => {
    console.log(data);
    return "Resolved Message";
})

    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    })