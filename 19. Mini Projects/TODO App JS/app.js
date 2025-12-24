let ul = document.querySelector('ul');
let inp = document.querySelector('input');
let btn = document.querySelector('button');

const addlist = (event) =>{
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = "Delete";
    delbtn.classList.add('del');

    item.appendChild(delbtn);
    ul.appendChild(item);
    
    console.log(`${inp.value} successfully Added`);
    inp.value = "";
}

btn.addEventListener('click',addlist);



// let delBtns = document.querySelectorAll('.del');
// for(bdel of delBtns){
//     bdel.addEventListener('click',function (e){
//         let par = this.parentElement;
//         // console.log(par);
//         par.remove();
//     })
// }


ul.addEventListener('click',function (event){
    // console.dir(event.target)
    if(event.target.nodeName == 'BUTTON'){
        let d = event.target.parentElement;
        d.remove();        
    }
    console.log("button Clicked");
})