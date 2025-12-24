let body = document.querySelector('body');

let btn = document.createElement('button');
btn.innerText = "Color";
body.append(btn);

btn.addEventListener('dblclick',(e)=>{
    btn.style.backgroundColor = "green";
}); 