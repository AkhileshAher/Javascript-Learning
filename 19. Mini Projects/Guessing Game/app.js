

let max = parseInt(prompt("Enter the Max Number : "));

const rnum = Math.floor(Math.random() * max) + 1;

let guess = parseInt(prompt("Guess The Number : "));

while(guess)
{
    if(guess =="quit")
    {
        console.log("User Quits");
        guess=0;
        break;
    }

    if(guess == rnum)
    {
        console.log("Congrats! You Guessed Correct");
        break;
    }
    else if(guess > rnum) {
        guess = parseInt(prompt("You Entered Large"));
    }
    
    else if(guess < rnum) {
        guess = parseInt(prompt("You Entered Small"));
    }
    else{
        console.log("Enter Correct Value : ")
    }
}