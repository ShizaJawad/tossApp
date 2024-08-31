// console.log("hello");
// // console.log(Math.random()*10);

// console.log(Math.ceil(Math.random()*2));

var Toss = document.querySelector("h4");
var guess = (Math.ceil(Math.random()*2));

// console.log(random);


function heads(){
    if(guess == 1) {
        Toss.innerHTML = ("YOU WON THE TOSS")
        console.log(guess);
    }
    else{
        Toss.innerHTML = ("YOU LOSS THE TOSS")
        console.log(guess);
    }
}

function tails(){
    if(guess == 2){
        Toss.innerHTML = ("YOU WON THE TOSS")
        console.log(guess);
    }
    else{
        Toss.innerHTML = ("YOU LOSS THE TOSS")
        console.log(guess);
    }
}

