let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ol = document.querySelector('ol');

let url ="http://universities.hipolabs.com/search?name=India";


btn.addEventListener('click',async ()=>{
    ol.innerText="";
    let statename = inp.value;
    let colArr =await getCollege(statename);
    for(col of colArr) {
        let li = document.createElement('li');
        li.innerText = col.name;
        ol.appendChild(li);
        // console.log(col.name);
    }
});


async function getCollege(state){
        try {
            let res = await axios.get(url);
            let colArr=res.data;
            let fans = [];
            for(list of colArr){
                if(list["state-province"] == state){
                    fans.push(list);
                }
            }
            // console.log(fans);
            return fans;
        } catch(err) {
            console.log("Error : ",err);
        }
}
