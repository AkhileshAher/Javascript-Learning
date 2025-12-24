let btn = document.querySelector("button");
// // let i=0;
// // btn.onclick = () => {
// //     i++;
// //     console.log(`Button Clicked ${i} times`);
// // }

// function sayHello()
// {
//     alert("Hello!!!");
// }

// // btn.onclick = sayHello;
// btn.onmouseenter = () => {
//     console.log("You Entered the Button !!");
// }



// Event Listener
let sayName = () =>{
    console.log("Akhilesh Aher");
};

let greet = function (){
    console.log("Hello Jee");
}

btn.addEventListener("click",sayName)
btn.addEventListener("click",greet)