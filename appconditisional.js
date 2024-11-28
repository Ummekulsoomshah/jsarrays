
let age = 20
if (age < 18) {
    console.log("denied");
} else {
    console.log("allowed")
}
age < 18 ? console.log("denied") : console.log("allowed");
let access = age < 18 ? "denied" : "allowed";
console.log(access)


//switch statements
let activity="Breakfast";
if (activity === "Get up") {
    console.log("It is 6:30AM");
} else if (activity === "Breakfast") {
    console.log("It is 7:00AM");
} else if (activity === "Drive to work") {
    console.log("It is 8:00AM");
} else if (activity === "Lunch") {
    console.log("It is 12.00PM");
} else if (activity === "Drive home") {
    console.log("It is 5:00PM")
} else if (activity === "Dinner") {
    console.log("It is 6:30PM");
}

switch (activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default:
        console.log("eat whatever");
        break;
}








// random number between 0 and 1
let randomNumber = Math.random(); 
// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 10; 
// removes digits past decimal place to provide a whole number
let RandomNumber = Math.floor(randomNumber);



// project 
// Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a
// random selection of either Rock, Paper, or Scissors (alternatively, you could
// create a version using real player input!). Rock will beat out Scissors, Paper
// will beat out Rock, and Scissors will beat out Paper. You can use JavaScript
// to create your own version of this game, applying the logic with an if
// statement. 
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player
// and then do the same for the computer's selection. The number
// represents the index values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can
// show the random results for the player and then also the result for the
// computer of the matching item from the array.
// 4. Create a condition to handle the player and computer selections. If
// both are the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but
// you could check which player's index value is bigger and assign the
// victory accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.
let gameElements=["Rock","Papper","Scissors"];
// random number between 0 and 1
let MyrandomNumber = Math.random(); 
// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 2; 
// removes digits past decimal place to provide a whole number
let userchoice = Math.floor(randomNumber);
// random number between 0 and 1
let computerrandomNumber = Math.random(); 
// multiply by 10 to obtain a number between 0 and 10
computerrandomNumber = computerrandomNumber * 2; 
// removes digits past decimal place to provide a whole number
let computerchoice = Math.floor(computerrandomNumber
);
console.log("userchoice",userchoice)
console.log("computerchoice",computerchoice)
if(userchoice==2 && computerchoice==1){
    console.log("tie");
}else if(userchoice==0 && computerchoice==1){
    console.log("user wins");
}else if(userchoice==1 && computerchoice==0){
    console.log("computer wins");
}else{
    console.log("tie")
}

