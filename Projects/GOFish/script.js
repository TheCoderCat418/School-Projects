let pDeck = [], pHand = [], comHand = [], playerTurn = true, playerPoints = 0, comPoints = 0;
let amtToDeal = 5;

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
                endPlayerTurn(true)
                botTurn()
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
            matchMaker(this.id)


        }
        b.id = i.toString() + b.innerHTML
        document.getElementById("pd").appendChild(b);
    }

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
    endPlayerTurn(false)
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
    for (let i = 0; i<document.getElementById("pd").children.length; i++) {
        document.getElementById("pd").children[i].style.backgroundColor = ""
    }
    blinkId= "0"
}

function botFindAndClearLinks(){
    for(let i= 0; i<comHand.length; i++){
        for(let j = 0; j<comHand.length;j++)
            if(comHand[i] === comHand[j]){
                pHand.splice(i, 1)
                pHand.splice(j, 1);
                comPoints++
            }
    }
}







let noPlayerInput = false;


function endPlayerTurn(end){
    update()
    for(let i =0; i<document.getElementById("pb").children.length;i++){
        document.getElementById("pb").children[i].disabled = end
    }
    for(let i =0; i<document.getElementById("pd").children.length;i++){
        document.getElementById("pd").children[i].disabled = end
    }
    // document.getElementById("doner").disabled = end
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


function checkForEndGame(isPlayer){
    if(pDeck.length === 0){

    }else if(pHand.length === 0){

    }else id(comHand.length === 0)
}









let colorer = "off", blinkId="0"

function blink(){
    if(blinkId=="0"){
        // for (let i = 0; i<document.getElementById("pd").children.length; i++) {
        //      document.getElementById("pd").children[i].style.backgroundColor = ""
        // }
        return
    }

    if("off" === colorer){
        colorer = "BY"
        document.getElementById(blinkId).style.backgroundColor = "yellow"
        setTimeout(() => { blink(blinkId) }, 500);
    }else{
        colorer = "off"
        document.getElementById(blinkId).style.backgroundColor = ""
        setTimeout(() => { blink(blinkId) }, 500);
    }


}



