let animationFrame, canvas, player


function init(){
    canvas = document.getElementById("caned").getContext("2d")
    player = createImage("rec/The_Red_One.png", 0, 375, 150, 75)
    animateLoop()
}
function animateLoop(){
    animationFrame = requestAnimationFrame(animateLoop);
    drawBackground()
    drawCharacter()
    drawEnemies()

}
function drawBackground(){

}
function drawCharacter(){
    canvas.drawImage(player, player.xval, player.yval, player.sizex, player.sizey)
}
function drawEnemies(){

}
let createImage = function(src, xcoord, ycoord, sizex, sizey,  velo, visi){
    let img = new Image()
    img.src = src;
    img.xval = xcoord;
    img.yval = ycoord;
    img.velo = velo;
    img.visi = visi;
    img.sizex = sizex
    img.sizey = sizey

    return img;
}

$(document).keydown((event) => {
    let keycode = (event.keyCode ? event.keyCode : event.which);

    if(keycode == 87){
        player.yval-=5
    }
    if(keycode== 83){
        player.yval += 5
    }
    if(keycode == 32){

    }

});