let numMar = 0, isPlayerTurn = true, botwins = 0, playerWins = 0, ez = false

function mainLoop() {
    if(prompt("EZ mode? (y/n)") === "y") ez = true;
    document.getElementById("starter").hidden = true
    document.getElementById("game").style.visibility = ""
    genNumbers()//numMar = 20//Math.round(Math.random() * 20 + 1)
    return;





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
    let gotIt = false, num, maxTake;
    while (!gotIt) {
        if (numMar === 1) {
            maxTake = numMar
        }else{
            maxTake = Math.floor(numMar / 2)
        }
        num = prompt("How many marbles would you like to take? Max: " + maxTake)
        if (maxTake >= Math.floor(num) && Math.floor(num) != 0) {
            gotIt = true
        } else {
            alert("Invalid NUM")
        }
    }
    numMar -= num
}

function botTurn() {
    let num
    if(ez) {
         num = Math.floor(Math.random() * (numMar / 2) + 1)
    }else {
        let foundP = false, c = 0
        while(!foundP){
            if((2 ** c) <= numMar){
                c++
            }else{
                foundP = true
                c--
                num =  numMar - (2 ** c)
            }
        }
    }
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
function genNumbers(){
    document.getElementById("1").innerHTML = Math.round(Math.random() * 20 + 1).toString()
    document.getElementById("2").innerHTML = Math.round(Math.random() * 20 + 1).toString()
    document.getElementById("3").innerHTML = Math.round(Math.random() * 20 + 1).toString()
}