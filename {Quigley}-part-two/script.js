let userName = prompt("Welcome to GC mini golf! What is your name?")

let holeAmount = prompt("Hi, " + userName + "! Would you like to play 3 or 6 holes today?")

let total = 0;

const holes = ["hole 1", "hole 2", "hole 3", "hole 4", "hole 5", "hole 6"];

for (let i = 0; i < holeAmount; i++) {
    let putts = Number( prompt("How many putts in " + holes[i] + "? (par is 3)") );
    total += putts;
}

if (holeAmount = 3) {
    goal = 9
} else if (holeAmount = 6) {
    goal = 18
}

let par = total - goal

if (total = goal) {
    console.log("Good game, " + userName + ". Your total par was: 0")
} else if (total < goal) {
    console.log("Great job, " + userName + "! Your total par was: -(" + par + ")")
} else if (total > goal) {
    console.log("Nice try, " + userName + "... Your total par was: +(" + par + ")")
}