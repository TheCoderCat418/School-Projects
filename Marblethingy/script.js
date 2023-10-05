let existingMarbles, isPlayerTurn


function start(){
    existingMarbles = Math.round(Math.random()*20+1)
    document.getElementById("mar").innerHTML = "There are currently " + existingMarbles + " left in the pot"
    isPlayerTurn = Math.round(Math.random()) === 1;
    if(!isPlayerTurn){
        botTurn()
    }else{
        playerTurn()
    }
}
function botTurn(){
    if(Math.round(Math.random()) === 1){
        play(1, true)
    }else{
        play(2, true)
    }
}
function play(num, isBot){
    existingMarbles -= num;
    document.getElementById("mar").innerHTML = "There are currently " + existingMarbles + " left in the pot"
    isPlayerTurn = !isPlayerTurn
    if(checkEndGame()){
        //END
        if(isBot){
            alert("Bot Wins")
        }else{
            alert("Player wins")
        }
    }
    if(!isPlayerTurn){
        botTurn()
    }else{
        playerTurn()
    }

}
function onPlayerClick(num){
    play(num, false)
}
function playerTurn(){
    document.getElementById("playerTurn").hidden = false
    let chil = document.getElementById("playerTurn").children
    for(let i = 0; i<chil.length; i++){
        if(chil.item(i).nodeName === "BUTTON"){
            chil.item(i).style.backgroundColor = "green";
        }
    }
}
function checkEndGame(){
    return existingMarbles <= 0;
}
