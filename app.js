const favMovie = "Into the wild";
let guess = prompt("guess my movie");

while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("Worng answer, please try again");
};

if (guess == favMovie) {
    console.log("You got it right");
} else {
    console.log("you quit");
};