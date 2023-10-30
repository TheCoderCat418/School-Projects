let pDeck = [], pHand = [], comHand = [], playerTurn = true, colorer = "off";
let amtToDeal = 5;
import * as decor from "./decor"
function init() {
    let x = []
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 10; j++) {
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
    for (let i = 0; i < amtToDeal; i++) {
        comHand.push(pDeck[0]);
        pDeck.splice(0, 1);
    }
    update()
    for (let i = 1; i < 10; i++) {
        let b = document.createElement("button");
        b.innerHTML = i.toString();

        b.onclick = function () {
            if (playerTurn) {
                playerTurn = false
                if (botHasCard(this.innerHTML)) {
                    playerTakeBotCard(this.innerHTML)
                } else {
                    playerTakeFromDeck()
                }
                botTurn()
                playerTurn = true
            }

        }

        document.getElementById("pb").appendChild(b);
    }
}

function displayPlayerHand() {
    document.getElementById("player").innerHTML = pHand.toString()
    while (document.getElementById("pd").children.length > 0) {
        document.getElementById("pd").children[0].remove()
    }
    for (let i = 0; i < pHand.length; i++) {
        let b = document.createElement("button");
        b.innerHTML = pHand[i];
        b.onclick = function () {
            //playerTurn(this.innerHTML)
        }
        b.id = i.toString() + b.innerHTML
        document.getElementById("pd").appendChild(b);
    }

}
function playerCheckMatch(){
decor.blink()
}







function displayCOMHand() {
    document.getElementById("com").innerHTML = comHand.toString()
}

function botTurn() {
    let cNum = Math.floor(Math.random()*comHand.length)
    if(playerHasCard(comHand[cNum])){
botTakePlayerCard(comHand[cNum])
    }else{
        COMTakeFromDeck();
    }
}

function botHasCard(card) {
    let i = comHand.indexOf(card)
    return comHand[i] === card;
}
function playerHasCard(card) {
    let i = pHand.indexOf(card)
    return pHand[i] === card;
}

function playerTakeBotCard(card) {
    let i = comHand.indexOf(card)
        if (comHand[i] === card) {
            pHand.push(comHand[i])
            comHand.splice(i, 1);
        }
    update()
}
function botTakePlayerCard(card) {
let i = pHand.indexOf(card)
    if (pHand[i] === card) {
        comHand.push(pHand[i])
        pHand.splice(i, 1);
    }
    update()
}

function playerTakeFromDeck() {
    pHand.push(pDeck[0])
    pDeck.splice(0, 1);
    update()
}

function COMTakeFromDeck() {
    comHand.push(pDeck[0])
    pDeck.splice(0, 1);
    update()
}
function update(){
    document.getElementById("deck").innerHTML = pDeck.toString()
    displayCOMHand()
    displayPlayerHand()
}

