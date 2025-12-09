const one = "rock";
const two = "scissors";
const three = "paper";

let enemy = Math.floor(Math.random() * 3) + 1;
const user = three;

console.log("Player picked : " + user);

if (enemy === 1){
    console.log("Computer picked : " + one);
} else if (enemy === 2){
    console.log("Computer picked : " + two);
} else if (enemy === 3){
    console.log("Computer picked : " + three);
} else {
    console.log("Invalid Number");
}


if (user === one){
    if (enemy === 1){
        console.log("Match Draw");
    } else if (enemy === 2){
        console.log("Player Won");
    } else if (enemy === 3){
        console.log("Computer Won");
    } else {
        console.log("Invalid");
    }
}

if (user === two){
    if (enemy === 1){
        console.log("Computer Won");
    } else if (enemy === 2){
        console.log("Match Draw");
    } else if (enemy === 3){
        console.log("Player Won");
    } else {
        console.log("Invalid");
    }
}

if (user === three){
    if (enemy === 1){
        console.log("Player Won");
    } else if (enemy === 2){
        console.log("Computer Won");
    } else if (enemy === 3){
        console.log("Match Draw");
    } else {
        console.log("Invalid");
    }
}