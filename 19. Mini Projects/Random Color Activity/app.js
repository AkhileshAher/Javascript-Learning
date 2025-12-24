let body = document.querySelector('body');

let heading = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");
let field = document.querySelector("fieldset");

heading.style.textAlign = 'center';
div.style.textAlign = 'center';
field.style.width = '400px';
field.style.height = '150px';



const gencol = () =>{
    let r = Math.floor(Math.random() * 255)+1;
    let g = Math.floor(Math.random() * 255)+1;
    let b = Math.floor(Math.random() * 255)+1;
    heading.innerText = `RGB(${r},${g},${b})`
    field.style.backgroundColor = `rgb(${r},${g},${b})`;
}

btn.addEventListener('click',gencol);
