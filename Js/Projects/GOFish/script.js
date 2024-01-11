let pDeck = [], pHand = [], COMHands = [[], []], playerTurn = true, playerPoints = 0, comPoints = [0, 0];
let amtToDeal = 5;
let botS = -1

function init() {
    let x = []
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 11; j++) {
            x.push(j.toString());
        }
    }
    for (let i = 0; i < 9999999; i++) {
        let rnum = Math.floor(Math.random() * x.length)
        let rnum2 = Math.floor(Math.random() * x.length)
        let char = x[rnum]
        x[rnum] = x[rnum2]
        x[rnum2] = char
    }
    pDeck = x;
    for (let i = 0; i < amtToDeal; i++) {
        pHand.push(pDeck[0]);
        pDeck.splice(0, 1);
    }
    for (let j = 0; j < COMHands.length; j++) {
        for (let i = 0; i < amtToDeal; i++) {
            COMHands[j].push(pDeck[0]);
            pDeck.splice(0, 1);
        }
    }
    update()
    for (let i = 1; i < 11; i++) {
        let b = document.createElement("button");
        b.innerHTML = i.toString();

        b.onclick = function () {
            if (botS === -1) {
                alert("Pick a bot!")
                return
            }
            let bot = botS
            if (botHasCard(this.innerHTML, bot)) {
                console.log("Player took a " + this.innerHTML + " from COM " + bot)
                playerTakeBotCard(this.innerHTML, bot)
            } else {
                console.log("PLAYER GO FISH")
                playerTakeFromDeck()
            }
            endPlayerTurn(true)
            botTurns()
        }
        document.getElementById("pb").appendChild(b);
    }
    for (let i = 0; i < COMHands.length; i++) {
        let b = document.createElement("button");
        b.innerHTML = i.toString()
        b.onclick = function () {
            botS = parseInt(this.innerHTML)
            for (let j = 0; j < document.getElementById("bots").children.length; j++) {
                document.getElementById("bots").children[j].style.backgroundColor = ""
            }
            this.style.backgroundColor = "green"
        }
        document.getElementById("bots").appendChild(b)
    }
}

function displayPlayerHand() {
    pHand.sort()
    for (let i = 0; i < document.getElementById("phanda").children.length; i++) {
        document.getElementById("phanda").children[i].remove()
        i = -1
    }
    while (document.getElementById("pd").children.length > 0) {
        document.getElementById("pd").children[0].remove()
    }
    for (let i = 0; i < pHand.length; i++) {
        let b = document.createElement("button");
        b.innerHTML = pHand[i];
        b.onclick = function () {
            matchMaker(this.id)
        }
        b.id = i.toString() + b.innerHTML
        let img = document.createElement("img")
        img.alt = "a"
        img.src = "cards/C" + pHand[i] + ".jpg"
        document.getElementById("phanda").appendChild(img)

        document.getElementById("pd").appendChild(b);
    }

}

function displayCOMHands() {
    for (let i = 0; i < document.getElementById("comhands").children.length; i++) {
        document.getElementById("comhands").children[i].remove()
        i = -1
    }
    for (let i = 0; i < COMHands.length; i++) {
        let div = document.createElement("div")
        let p = document.createElement("p")
        p.innerHTML = "COM " + i + ":"
        div.appendChild(p)
        for (let j = 0; j < COMHands[i].length; j++) {
            let img = document.createElement("img")
            img.alt = "a"
            img.src = "cards/back.jpg"
            div.appendChild(img)
        }
        document.getElementById("comhands").appendChild(div)
    }
}

function botTurns() {
    for (let bot = 0; bot < COMHands.length; bot++) {
        botFindAndClearLinks(bot)
        if (!checkEndGame(bot)) {
            let cNum = Math.floor(Math.random() * COMHands[bot].length)
            // if (playerHasCard(COMHands[bot][cNum])) {
            let botR = Math.floor(Math.random() * 3)
            if (bot === botR - 1) {
                if (bot === 0) {
                    botR = 2
                } else {
                    botR = 1
                }
            }
            botTakePlayerCard(COMHands[bot][cNum], bot, botR - 1)
        }
    }
    endPlayerTurn(false)
}

function botHasCard(card, bot) {
    let j = COMHands[bot].indexOf(card)
    return COMHands[bot][j] === card;
}

function playerTakeBotCard(card, bot) {
    let i = COMHands[bot].indexOf(card)
    if (COMHands[bot][i] === card) {
        pHand.push(COMHands[bot][i])
        COMHands[bot].splice(i, 1);
    }
    update()
}

function botTakePlayerCard(card, bot, botToTake) {
    let i;
    if (botToTake === -1) {
        i = pHand.indexOf(card)
        if (pHand[i] === card) {
            COMHands[bot].push(pHand[i])
            pHand.splice(i, 1);
            console.log("COM " + bot + " takes a " + card + " from user (-1 is player)" + botToTake)
        } else {
            console.log(bot + " GO FISH")
            COMTakeFromDeck(bot)
        }
    } else {
        i = COMHands[botToTake].indexOf(card)
        if (COMHands[botToTake][i] === card) {
            COMHands[bot].push(pHand[i])
            COMHands[botToTake].splice(i, 1);
            console.log("COM " + bot + " takes a " + card + " from user (-1 is player)" + botToTake)
        } else {
            console.log(bot + " GO FISH")
            COMTakeFromDeck(bot)
        }
    }
    update()
}

function playerTakeFromDeck() {
    if (!checkEndGame("d")) {
        pHand.push(pDeck[0])
        pDeck.splice(0, 1);
        update()
    }
}

function COMTakeFromDeck(bot) {
    if (!checkEndGame("d")) {
        COMHands[bot].push(pDeck[0])
        pDeck.splice(0, 1);
        update()
    }
}

function update() {
    for (let i = 0; i < document.getElementById("deck").children.length; i++) {
        document.getElementById("deck").children[i].remove()
        i = -1
    }
    for (let j = 0; j < pDeck.length; j++) {
        let img = document.createElement("img")
        img.alt = "a"
        img.src = "cards/back.jpg"
        document.getElementById("deck").appendChild(img)
    }
    displayCOMHands()
    displayPlayerHand()
    for (let i = 0; i < document.getElementById("pd").children.length; i++) {
        document.getElementById("pd").children[i].style.backgroundColor = ""
    }
    blinkId = "0"
}

function botFindAndClearLinks(bot) {
    for (let i = 0; i < COMHands[bot].length; i++) {
        for (let j = 0; j < COMHands[bot].length; j++) {
            if (COMHands[bot][i] === COMHands[bot][j] && i !== j) {
                let num = COMHands[bot][i]
                console.log("COM " + bot + " clears a pair of " + num + "'s")
                COMHands[bot].splice(COMHands[bot].indexOf(num), 1)
                COMHands[bot].splice(COMHands[bot].indexOf(num), 1);
                comPoints[bot]++
                i = -1
                j = -1
            }
        }
    }
}

function checkEndGame() {
    if (pHand.length === 0) {
        alert("Player Wins!")
        location.reload()
        return true;
    } else if (pDeck.length === 0) {
        if (playerPoints > comPoints[0] && playerPoints > comPoints[1]) {
            alert("Player Win")
        } else if (comPoints[0] > comPoints[1] && comPoints[0] > playerPoints) {
            alert("COM 0 Win")
        } else {
            alert("COM 1 Win")
        }
        location.reload()
        return true;
    } else {
        for (let i = 0; i < COMHands.length; i++) {
            if (COMHands[i].length === 0) {
                alert("Bot " + i + " Wins!")
                location.reload()
                return true;
            }
        }
    }
    return false
}

let noPlayerInput = false;

function endPlayerTurn(end) {
    update()
    for (let i = 0; i < document.getElementById("pb").children.length; i++) {
        document.getElementById("pb").children[i].disabled = end
    }
    for (let i = 0; i < document.getElementById("pd").children.length; i++) {
        document.getElementById("pd").children[i].disabled = end
    }
    console.log("-------------------------------------------------------")
}


function matchMaker(num1id) {
    if (!noPlayerInput) {
        if (blinkId != "0") {
            let num2id = blinkId
            if (document.getElementById(num2id).innerHTML === document.getElementById(num1id).innerHTML && document.getElementById(num2id).id !== document.getElementById(num1id).id) {
                blinkId = 0;
                noPlayerInput = true;
                setTimeout(() => {
                    noPlayerInput = false;
                    update()
                }, 1000);
                document.getElementById(num1id).style.backgroundColor = "green"
                document.getElementById(num2id).style.backgroundColor = "green"
                pHand.splice(pHand.indexOf(document.getElementById(num1id).innerHTML), 1)
                pHand.splice(pHand.indexOf(document.getElementById(num2id).innerHTML), 1)
                playerPoints++
                checkEndGame("p")

            } else {
                blinkId = 0;
                noPlayerInput = true;
                document.getElementById(num1id).style.backgroundColor = "red"
                document.getElementById(num2id).style.backgroundColor = "red"
                setTimeout(() => {
                    noPlayerInput = false;
                    document.getElementById(num1id).style.backgroundColor = "";
                    document.getElementById(num2id).style.backgroundColor = "";
                    update()
                }, 1000);
            }
        } else {
            blinkId = num1id;
            blink(blinkId)
        }
    }
}

let colorer = "off", blinkId = "0"

function blink() {
    if (blinkId == "0") {
        return
    }
    if ("off" === colorer) {
        colorer = "BY"
        document.getElementById(blinkId).style.backgroundColor = "yellow"
        setTimeout(() => {
            blink(blinkId)
        }, 500);
    } else {
        colorer = "off"
        document.getElementById(blinkId).style.backgroundColor = ""
        setTimeout(() => {
            blink(blinkId)
        }, 500);
    }
}



