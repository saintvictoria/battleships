var randomloc = Math.floor(Math.random() *5);
var location1 = randomloc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk == false) {
    guess = prompt("Enter a number between 0 and 6");
    if (guess >= 1 && guess <= 6) {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("You hit me!");
            hits = hits + 1;
        } else {
            alert("Try again");

        }

        if ( hits == 3){
            isSunk = true;
            alert("You sunk my battleship");
        }
    } else {
        alert("Please enter a valid Number")
    }

}
var statistics = "You took " + guesses + " guesses to sink my battleship, " + " which means your accuracy was " + (3/guesses);

alert(statistics);


