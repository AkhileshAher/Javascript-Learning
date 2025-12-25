let url = "https://catfact.ninja/fact";
let btn = document.querySelector('button');
let field = document.querySelector("fieldset");


btn.addEventListener('click',async ()=>{
    let fact = await getFacts();
    // console.log(fact);
    field.innerText = fact;
})

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        console.log(err);
        return "No Fact Found";
    }
};

// fetch(url)
// .then((response)=>{
//     console.log(response);
// })
// .catch((err) =>{
//     console.log("Error : ",err)
// });
