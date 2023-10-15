let isPlayerTurn = true;
let botWins = 0;
let playerWins = 0;
let EZMode = false;
let selected = 0;

if (prompt("EZ mode? (y/n)") === "y") EZMode = true;

function mainLoop() {
    for(let i = 1; i<=3; i++){
        document.getElementById(i.toString()).parentElement.style.backgroundColor = "dodgerblue"
        document.getElementById("b"+i.toString()).disabled = false
    }
    document.getElementById("restart").hidden = true
    document.getElementById("starter").hidden = true
    document.getElementById("game").style.visibility = "visible"

    genNumbers()//numMar = 20//Math.round(Math.random() * 20 + 1)

    isPlayerTurn = Math.round(Math.random() * 2 + 1) !== 1;
    document.getElementById("ranger").oninput = function () {
        document.getElementById("bigPotAmu").innerHTML = "You will take " + document.getElementById("ranger").value + " marbles."
    }
    document.getElementById("sub").onclick = function () {
        if (selected === 1) {
            document.getElementById("1").innerHTML -= document.getElementById("ranger").value
        } else if (selected === 2) {
            document.getElementById("2").innerHTML -= document.getElementById("ranger").value
        } else if (selected === 3) {
            document.getElementById("3").innerHTML -= document.getElementById("ranger").value
        } else {
            alert("Problem")
        }
        botTurn()
    }
}
function picked(potNum) {
    selected = potNum
    if (potNum === 1) {
        document.getElementById("ranger").max = Math.floor(document.getElementById("1").innerHTML / 2)
        document.getElementById("bigPotText").innerHTML = "Jar 1"
        document.getElementById("selPotNum").innerHTML = document.getElementById("1").innerHTML
    } else if (potNum === 2) {
        document.getElementById("ranger").max = Math.floor(document.getElementById("2").innerHTML / 2)
        document.getElementById("bigPotText").innerHTML = "Jar 2"
        document.getElementById("selPotNum").innerHTML = document.getElementById("2").innerHTML
    } else if (potNum === 3) {
        document.getElementById("ranger").max = Math.floor(document.getElementById("3").innerHTML / 2)
        document.getElementById("bigPotText").innerHTML = "Jar 3"
        document.getElementById("selPotNum").innerHTML = document.getElementById("3").innerHTML
    } else {
        alert("Problem")
    }
    document.getElementById("bigPotAmu").innerHTML = "You will take " + document.getElementById("ranger").value + " marbles."
    document.getElementById("game").style.visibility = "hidden"
    document.getElementById("bigPot").style.visibility = "visible"
    if (document.getElementById(potNum).innerHTML === "1") {
        document.getElementById(potNum).parentElement.style.backgroundColor = "green"
        document.getElementById("b" + potNum).disabled = true
    }
}
function botTurn() {
    document.getElementById("game").style.visibility = "visible"
    document.getElementById("bigPot").style.visibility = "hidden"
    let numInPot = -1, pot = 1
    while (pot < 4) {
        if (document.getElementById(pot.toString()).innerHTML === "0") {
            pot++
        } else if (document.getElementById(pot.toString()).innerHTML === "1") {
            numInPot = 1
            break
        }else{
            pot++
        }
    }

let status = findAvailable()
    if(status.length === 0){
        endGame()
        return;
    }
if(pot===4) {
    status.at(1)
    pot = status.at(Math.floor(Math.random() * status.length))
    numInPot = document.getElementById(pot.toString()).innerHTML
}
    let num
    if (EZMode) {
        num = Math.floor(Math.random() * (numInPot / 2) + 1)
    } else {
        let foundP = false, c = 0
        while (!foundP) {
            if ((2 ** c) < numInPot) {
                c++
            } else {
                foundP = true
                c--
                num = numInPot - (2 ** c)
            }
        }
    }

    if(numInPot === 1){
        document.getElementById(pot.toString()).parentElement.style.backgroundColor = "red"
        document.getElementById(pot.toString()).innerHTML = "0"
        document.getElementById("b"+pot.toString()).disabled = true
        alert("COM took 1 marble from jar " +pot+".")
        if(findAvailable().length === 0){
            endGame()
        }
        return
    }
    alert("COM took " + num + " marble(s) from jar " +pot+".")
    document.getElementById(pot.toString()).innerHTML -= num

}

function endGame() {
    document.getElementById("restart").hidden = false
    if(didBotWin()){
        botWins++
    }else{
        playerWins++
    }
    updateWins()
}
function updateWins() {
    document.getElementById("wins").innerHTML = "BOT: " + botWins + " | PLAYER: " + playerWins
}
function genNumbers() {
    document.getElementById("1").innerHTML = Math.round(Math.random() * 20 + 1).toString()
    document.getElementById("2").innerHTML = Math.round(Math.random() * 20 + 1).toString()
    document.getElementById("3").innerHTML = Math.round(Math.random() * 20 + 1).toString()
}
function findAvailable(){
    let ava = []
    if(document.getElementById("b1").disabled === false){
        ava.push(1)
    }
    if(document.getElementById("b2").disabled === false){
        ava.push(2)
    }
    if(document.getElementById("b3").disabled === false){
        ava.push(3)
    }
    return ava
}
function didBotWin(){
    let bot = 0
    for(let i = 1; i<=3; i++) {
        if (document.getElementById(i.toString()).parentElement.style.backgroundColor === "red") {
            bot++
        }
    }
    return bot >= 2
}