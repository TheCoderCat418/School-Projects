let animationFrame, canvas, player, evilShips = [], movingUp = false, goodLazer


function init() {
    canvas = document.getElementById("caned").getContext("2d")
    player = createImage("rec/The_Red_One.png", 0, 375, 150, 75)
    makeEnimies()
    animateLoop()
}

function animateLoop() {
    animationFrame = requestAnimationFrame(animateLoop);
    drawBackground()
    drawCharacter()
    moveEnemies()
    drawEnemies()

}

function drawBackground() {
    canvas.fillRect(0, 0, 2000, 1250)
}

function drawCharacter() {
    canvas.fillStyle = "#2d0470"
    canvas.drawImage(player, player.xval, player.yval, player.sizex, player.sizey)
}

function moveEnemies() {
    if(evilShips[evilShips.length-1][evilShips[evilShips.length-1].length-1].yval + evilShips[evilShips.length-1][evilShips[evilShips.length-1].length-1].sizey > 750){
        movingUp = true
    }else if(evilShips[evilShips.length-1][0].yval < 0){
        movingUp = false
    }
    for (let j = 0; j < evilShips.length; j++) {

        for (let i = 0; i < evilShips[j].length; i++) {
            if (movingUp) {
                evilShips[j][i].yval -= evilShips[j][i].velo
            } else {
                evilShips[j][i].yval += evilShips[j][i].velo
            }
        }


    }
}

function drawEnemies() {
    for (let j = 0; j < evilShips.length; j++) {
        for (let i = 0; i < evilShips[j].length; i++) {
            canvas.drawImage(evilShips[j][i], evilShips[j][i].xval, evilShips[j][i].yval, evilShips[j][i].sizex, evilShips[j][i].sizey)
        }
    }
}

function makeEnimies() {
    for (let j = 0; j < 2; j++) {
        evilShips[j] = []
        for (let i = 0; i < 5; i++) { //OFFSET + NUMINROW * (SIZE + PADDING)
            evilShips[j][i] = createImage("rec/Police_Cruiser.png", 1000 + j * (150 + 50), 50 + i * (75 + 50), 150, 75, 2)
        }
    }
}
function shootGoodLaser(){

}
let createImage = function (src, xcoord, ycoord, sizex, sizey, velo, visi) {
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

    if (keycode == 87) {
        if (player.yval > 0) {
            player.yval -= 5
        } else {
            console.log("Fail, player.yval> -750")
        }
    }
    if (keycode == 83) {
        if (player.yval < 750 - player.sizey) {
            player.yval += 5
        } else {
            console.log("Fail, player.yval > 0")
        }
    }
    console.log(keycode)

    if (keycode == 32) {

    }

});