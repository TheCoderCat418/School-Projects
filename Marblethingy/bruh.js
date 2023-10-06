let numMar = 0, isPlayerTurn = true, botwins = 0, playerWins = 0

function mainLoop() {
    document.getElementById("starter").locked = true
    numMar = Math.round(Math.random() * 20 + 1)
    isPlayerTurn = Math.round(Math.random() * 2 + 1) !== 1;
    while (true) {
        if (isPlayerTurn) {
            playerTurn()
        } else {
            botTurn()
        }
        if (checkWin()) {
            if (isPlayerTurn) {
                alert("Player wins!!!!!")
                playerWins++
                break
            } else {
                alert("Bot wins")
                botwins++
                break
            }

        }
        isPlayerTurn = !isPlayerTurn

    }
    updateWins()
    document.getElementById("starter").locked = false
}

function playerTurn() {
    alert("There are " + numMar + " marbles. " + displayMar(numMar))
    let gotIt = true, num
    while (gotIt) {
        num = prompt("How many marbles would you like to take?")
        //TEMP
        if (num == 1 || num == 2) {
            gotIt = false
        } else {
            alert("Invalid NUM")
        }
    }
    numMar -= num
}

function botTurn() {
    let num = Math.floor(Math.random() * 2 + 1)
    alert("COM took " + num + " marbles.")
    numMar -= num
}

function checkWin() {
    return numMar <= 0;
}

function displayMar(num) {
    let s = ""
    for (let i = 0; i < num; i++) {
        s += "+"
    }
    return "( " + s + " )"

}

function updateWins() {
    document.getElementById("wins").innerHTML = "BOT: " + botwins + " | PLAYER: " + playerWins
}