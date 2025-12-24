// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "apna College",
//   () => {
//     console.log("Data Was Saved Successfully");
//     savetoDb("Hello World",()=>{
//         console.log("Success 2");
//     }, 
//     ()=>{
//         console.log("Failure 2");
//     });
//   },
//   () => {
//     console.log("Weak Connection , Data not Saved");
//   }
// );


// function savetoDb(data)
// {
//     return new Promise((resolve,reject) =>{
//         let internetSpeed = Math.floor(Math.random() * 10)+1;
//         if(internetSpeed > 4){
//             resolve("Data Was Saved Successfully");
//         } else {
//             reject("Weak Connection");
//         }
//     });
// }

// let req = savetoDb("Akhilesh Aher");
// console.log(req);
// req.then(()=>{
//     console.log("Promise Resolved");
//     return savetoDb("Hello Jee")
// })
// .then(()=>{
//     console.log("Promise 2 Reolved");
// })
// .catch(()=>{
//     console.log("Promsie Rejected");
// });