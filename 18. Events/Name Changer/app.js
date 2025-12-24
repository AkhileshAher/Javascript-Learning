let p = document.querySelector("p");

p.addEventListener('click',function (){
    console.log("Para was Clicked");;
    p.innerText = "I am New Text";
})

let inner = document.querySelectorAll('div')[1];


let a = inner.addEventListener('mouseenter',function () {
    inner.style.backgroundColor = "black";
    inner.style.boxShadow = "0px 0px 10px 2px gray"
});

inner.addEventListener('mouseleave',function () {
    inner.style.backgroundColor = "white";
    inner.style.boxShadow = "0 0 0 0 white";
});
