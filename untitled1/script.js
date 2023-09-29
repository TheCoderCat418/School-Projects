let turn;

function starter() {
    setTurn()
    let rnum = Math.floor(Math.random() * 10 + 1)
    console.log(rnum);
    let guess;
    if (turn === 1) {
        while (true) {
            guess = prompt("P1: What number wold you like to guess")
            if (guess == rnum) {
                alert("P1 wins");
                break
            }
            guess = prompt("P2: What number wold you like to guess")
            if (guess == rnum) {
                alert("P2 wins");
                break
            }
        }
    } else {
        while (true) {
            guess = prompt("P2: What number wold you like to guess")
            if (guess == rnum) {
                alert("P2 wins");
                break;
            }
            guess = prompt("P1: What number wold you like to guess")
            if (guess == rnum) {
                alert("P1 wins");
                break
            }
        }
    }
}

function setTurn() {
    turn = Math.floor(Math.random() * 2 + 1);

}