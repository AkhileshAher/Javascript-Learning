let name ="John Doe";

function outerfunction() {
    let name = "Iron man";

    function innerfunction() {
        let name="Tony Stark";
        console.log(name);
    }
    innerfunction();
}
outerfunction();