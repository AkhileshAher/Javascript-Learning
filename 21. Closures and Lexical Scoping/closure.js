function outerfunction() {
    let name = "Steve Rogers";
    function innerfunction() {
        console.log(name);
    }
    return innerfunction;
}


let inner = outerfunction();
inner();