function playCraps() {
    //this is a one line comment
    /*this is the function to play craps in game.html
    Rules for craps
    Roll two Dice
    add up to 7 or 11, you lose!
    if they are doubbles and even, you win!
    Eveything else is a push
    Jacobey West
    6/6/2024
    */
    console.log("playCraps() started");
    //roll the dice
    //dice 1
    var die1 = Math.floor(Math.random() * 6) + 1; //This declares a variable, makes the variable with a random number and .floor rounded the result down, +1 after the *6(which indicates that it is a 6 sided dice) add 1 to the result, ensuring it's a 0% chance to roll a 0 and break the game.
    console.log(die1); //Logs the result of dice 1
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1; //Puts the result of dice 1 onto the page in the die1res tag on Game.html
    //dice 2
    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;
    //This adds the dice together
    var sum = die1 + die2; //This says add dice 1 and dice 2
    console.log(sum); //This logs the total ammount inside of the console
    document.getElementById("sumRes").innerHTML = "sum result = " + sum; //Puts the total on the page
    //look for a loss (two pipes || means or)
    if (sum == 7 || sum == 11) {  //This says if the sum equals 7 or 11 then you(Ref to next line)
        console.log("loss"); //Lose
        //Puts it into the page, saying your victory state
        document.getElementById("gameRes").innerHTML = "You lost to the blade runner!";
    } else if (die1 == die2 && die1 % 2 == 0) { //looks for a win ensuring that dice one and 2 are equal, and an even number. Equal expressed bt "==" and even expressed by "% 2" (Fully% 2 ==0 "this just says the remainder is 0")
        console.log("win");
        document.getElementById("gameRes").innerHTML = "You got angry and flipped the board, declaring victory. But the Runner thinks you cheated.";
    } else {     //everything else is a push meaning that anything that is not a modulus of 2(meaning how many times 2 can go in) and is not equal to 7 or 11 is a tie
        console.log("tie");
        document.getElementById("gameRes").innerHTML = "He jiggled the board as you rolled, the Runner says the game is a tie";
    }
}