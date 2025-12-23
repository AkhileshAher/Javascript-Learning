// IIFE - Immediately Invoked Function Expression

// IIFEs are used to avoid global pollution problem
;(function (){
    console.log("I am IIFE");
})();



;(()=>{
    console.log("IIFE function dont have names");
})();