let pDeck = [], pHand = [], comHand = [], playerTurn = true;
let amtToDeal = 5;









function start(){
    let x =[]
   for (let i = 0; i<4;i++){
       for (let j = 1; j<10;j++){
           x.push(j);
       }
   }
    for(let i=0; i<9999999;i++){
        let rnum = Math.floor(Math.random()*x.length)
        let rnum2 = Math.floor(Math.random()*x.length)
        let char = x[rnum]
        x[rnum] = x[rnum2]
        x[rnum2] = char
    }
    pDeck = x;
    for(let i = 0; i<amtToDeal; i++){
        pHand.push(pDeck[0]);
        pDeck.splice(0,1);
    }
    for(let i = 0; i<amtToDeal; i++){
        comHand.push(pDeck[0]);
        pDeck.splice(0,1);
    }
    document.getElementById("deck").innerHTML = pDeck.toString()
    displayCOMHand()
    displayPlayerHand()
    for(let i = 1; i<10;i++){
            let b = document.createElement("button");
            b.innerHTML = i.toString();

            b.onclick = function (){
                if(playerTurn){
                    playerTurn = false
                botHasCard(this.innerHTML)
                  }

            }

            document.getElementById("pb").appendChild(b);
        }
}

function displayPlayerHand(){
    document.getElementById("player").innerHTML  = pHand.toString()
    console.log(document.getElementById("pd").children)
    console.log(document.getElementById("pd").children.length)
    while(document.getElementById("pd").children.length > 0){
        document.getElementById("pd").children[0].remove()
    }
    for(let i = 0; i<pHand.length;i++){
        let b = document.createElement("button");
        b.innerHTML = pHand[i];
        b.onclick = function (){
            //playerTurn(this.innerHTML)
        }
        document.getElementById("pd").appendChild(b);
    }

}
function displayCOMHand(){
    document.getElementById("com").innerHTML  = comHand.toString()
}
function botTurn(){

}
function botHasCard(card){
    for(let i = 0; i<comHand.length; i++){
        if(comHand[i] == card){
            pHand.push(comHand[i])
            comHand.splice(i, 1);
        }
    }
    displayCOMHand()
    displayPlayerHand()
}





