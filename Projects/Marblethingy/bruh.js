let numMar = 0, isPlayerTurn = true, botwins = 0, playerWins = 0, ez = false, selected = 0

function mainLoop() {
    if (prompt("EZ mode? (y/n)") === "y") ez = true;
    document.getElementById("starter").hidden = true
    document.getElementById("game").style.visibility = "visible"
    genNumbers()//numMar = 20//Math.round(Math.random() * 20 + 1)
    isPlayerTurn = Math.round(Math.random() * 2 + 1) !== 1;
    document.getElementById("ranger").oninput = function (event) {
        document.getElementById("bigPotAmu").innerHTML = "You will take " + document.getElementById("ranger").value + " marbles."
    }
    document.getElementById("sub").onclick = function (event) {
        if (selected == 1) {
            document.getElementById("1").innerHTML -= document.getElementById("ranger").value
        } else if (selected == 2) {
            document.getElementById("2").innerHTML -= document.getElementById("ranger").value
        } else if (selected == 3) {
            document.getElementById("3").innerHTML -= document.getElementById("ranger").value
        } else {
            alert("Problem")
        }
        //document.getElementById(selected.toString()).parentElement.style.backgroundColor = "green"
        document.getElementById("game").style.visibility = "visible"
        document.getElementById("bigPot").style.visibility = "hidden"
        alert("Doe")
        botTurn()
        alert("odood")
    }

}

function picked(potNum) {
    selected = potNum
    if (potNum == 1) {
        document.getElementById("ranger").max = Math.floor(document.getElementById("1").innerHTML / 2)
        document.getElementById("bigPotText").innerHTML = "Jar 1"
        document.getElementById("selPotNum").innerHTML = document.getElementById("1").innerHTML
    } else if (potNum == 2) {
        document.getElementById("ranger").max = Math.floor(document.getElementById("2").innerHTML / 2)
        document.getElementById("bigPotText").innerHTML = "Jar 2"
        document.getElementById("selPotNum").innerHTML = document.getElementById("2").innerHTML
    } else if (potNum == 3) {
        document.getElementById("ranger").max = Math.floor(document.getElementById("3").innerHTML / 2)
        document.getElementById("bigPotText").innerHTML = "Jar 3"
        document.getElementById("selPotNum").innerHTML = document.getElementById("3").innerHTML
    } else {
        alert("Problem")
    }
    document.getElementById("game").style.visibility = "hidden"
    document.getElementById("bigPot").style.visibility = "visible"
    if(document.getElementById(potNum).innerHTML == 1){
        document.getElementById(potNum).parentElement.style.backgroundColor = "green"
        document.getElementById("b"+potNum).disabled = true
    }




    // let gotIt = false, num, maxTake;
    // while (!gotIt) {
    //     if (numMar === 1) {
    //         maxTake = numMar
    //     }else{
    //         maxTake = Math.floor(numMar / 2)
    //     }
    //     num = prompt("How many marbles would you like to take? Max: " + maxTake)
    //     if (maxTake >= Math.floor(num) && Math.floor(num) != 0) {
    //         gotIt = true
    //     } else {
    //         alert("Invalid NUM")
    //     }
    // }
    // numMar -= num





    // while (true) {
    //     if (isPlayerTurn) {
    //         playerTurn()
    //     } else {
    //         botTurn()
    //     }
    //     if (checkWin()) {
    //         if (isPlayerTurn) {
    //             alert("Player wins!!!!!")
    //             playerWins++
    //             break
    //         } else {
    //             alert("Bot wins")
    //             botwins++
    //             break
    //         }

    //     }
    //     isPlayerTurn = !isPlayerTurn

    // }
    // updateWins()
    //document.getElementById("starter").locked = false
}



function botTurn() {
    alert("Check 1")
    let numInPot = 0, pot = 0
    while(true){
        if(pot >= 4) pot = -1
        if(document.getElementById(pot).innerHTML == 1){
            numInPot = 1
            break
        }
        if(pot == -1){
            pot = Math.floor(Math.random * 3 + 1)
            numInPot = document.getElementById(pot).innerHTML
            break
        }
        pot++
    }

    alert(numInPot)
    let num
    if (ez) {
        num = Math.floor(Math.random() * (numInPot / 2) + 1)
    } else {
        let foundP = false, c = 0
        while (!foundP) {
            if ((2 ** c) <= numInPot) {
                c++
            } else {
                foundP = true
                c--
                num = numInPot - (2 ** c)
            }
        }
    }
    alert("COM took " + num + " marbles.")
    if(numInPot == 0){
        document.getElementById(pot).parentElement.style.backgroundColor = red
    }
    return num
}

function checkWin() {
    alert("abc")
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
function genNumbers() {
    document.getElementById("1").innerHTML = Math.round(Math.random() * 20 + 1).toString()
    document.getElementById("2").innerHTML = Math.round(Math.random() * 20 + 1).toString()
    document.getElementById("3").innerHTML = Math.round(Math.random() * 20 + 1).toString()
}