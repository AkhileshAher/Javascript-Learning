let form = document.querySelector('form');

let user = document.querySelector('#user');
let pass = document.querySelector('#pass');

user.addEventListener('input',function (event) {
    console.log(this.value);
})