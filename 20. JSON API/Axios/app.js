let url  = "http://universities.hipolabs.com/search?name=";

// let inp = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('ol');

btn.addEventListener('click',async ()=>{
    let country = document.querySelector('input').value;
    list.innerText="";
    // console.log(country);
    let colleges = await getColleges(country);
    let colArr = colleges.data;
    console.log(colArr)
    for(cols of colArr){
        let li = document.createElement('li');
        li.innerText = cols.name;
        list.appendChild(li);
    }
});

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res;
    }catch(e) {
        console.log("Some Error Occured",e);
    }
}