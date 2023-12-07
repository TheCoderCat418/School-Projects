let animationFrame, canvas, player, evilShips = [], movingUp = false
let goodLazer, score = 0
let evilLasers = []
let laserInMotion = false
let playerLives = 3
let powerups = []







function init() {
    canvas = document.getElementById("caned").getContext("2d")
    player = createImage("rec/The_Red_One.png", 0, 375, 150, 75)
    goodLazer = createImage("rec/LaysBeam.png", 0, 0, 100, 10, 5, false)
    setTimeout(() => {
        makePowerUp()
    }, 10000)
    makeEnimies()
    animateLoop()
    for(let i = 0; i<evilShips.length; i++){
        for(let j = 0; j<evilShips[i].length;j++){
            setTimeout(() => {
                createEvilLaser([i,j])
            }, Math.random() * 9999 + 3000)

        }
    }

}

function animateLoop() {
    animationFrame = requestAnimationFrame(animateLoop);
    drawBackground()
    drawCharacter()
    moveEnemies()
    drawEnemies()
    movePowerUps()
    goodLaserCheckCollisions()
    drawGoodLaser()
    drawScore()
    displayHealth()
    moveEvilLasers()
    checkbadLasersCollision()

    if(playerLives <= 0){
        location.reload()
    }
}

function drawBackground() {
    canvas.fillStyle = "#18003f"
    canvas.fillRect(0, 0, 2000, 1250)
}
function makePowerUp(){
    let p = createImage("rec/heart-png-38780.png", 1250, Math.random() * 700, 50,50, 2)
    powerups.push(p);
    let t = 5000
    if(playerLives > 4){
        t += 7500;
    }
    setTimeout(() => {
        makePowerUp()
    }, Math.random() * 7500 + t)
}
function movePowerUps(){
    for(let i = 0; i<powerups.length; i++){
        if(player.xval + player.sizex > powerups[i].xval){
            if(player.yval< powerups[i].yval + powerups[i].sizey) {
                if(player.yval + player.sizey > powerups[i].yval) {
                    playerLives++
                    powerups.splice(i, 1)
                    i--
                }
            }
        }
        powerups[i].xval -= powerups[i].velo
        canvas.drawImage(powerups[i], powerups[i].xval, powerups[i].yval, powerups[i].sizex, powerups[i].sizey);
    }

}
function drawCharacter() {

    canvas.drawImage(player, player.xval, player.yval, player.sizex, player.sizey)
}
function displayHealth(){
    for(let i = 0; i<playerLives; i++) {
        canvas.drawImage(createImage("rec/heart-png-38780.png"), 400 + i * (50 + 25), 10, 50, 50)
    }
}
function moveEnemies() {

    let bottom = [0, 0]
    for (let j = 0; j < evilShips.length; j++) {
        for (let i = 0; i < evilShips[j].length; i++) {
            if (evilShips[j][i] !== null && i > bottom[1]) {
                bottom = [j, i]
            }
        }
    }
    let top = [0, 4]
    for (let j = 0; j < evilShips.length; j++) {
        for (let i = 0; i < evilShips[j].length; i++) {
            if (evilShips[j][i] !== null && i < top[1]) {
                top = [j, i]
            }
        }
    }
    if (evilShips[bottom[0]][bottom[1]].yval + evilShips[bottom[0]][bottom[1]].sizey > 750) {
        movingUp = true
    } else if (evilShips[top[0]][top[1]].yval < 0) {
        movingUp = false
    }
    for (let j = 0; j < evilShips.length; j++) {
        for (let i = 0; i < evilShips[j].length; i++) {
            if (evilShips[j][i] !== null) {
                if (movingUp) {
                    evilShips[j][i].yval -= evilShips[j][i].velo
                } else {
                    evilShips[j][i].yval += evilShips[j][i].velo
                }
            }
        }
    }
}

function drawEnemies() {
    for (let j = 0; j < evilShips.length; j++) {
        for (let i = 0; i < evilShips[j].length; i++) {
            if (evilShips[j][i] !== null) {
                canvas.drawImage(evilShips[j][i], evilShips[j][i].xval, evilShips[j][i].yval, evilShips[j][i].sizex, evilShips[j][i].sizey)
            }
        }
    }
}

function createEvilLaser(pos){
    if(evilShips[pos[0]][pos[1]] !== null){
        evilLasers.push(createImage("rec/Laser-Beam-PNG-HD-Image.png", evilShips[pos[0]][pos[1]].xval,  evilShips[pos[0]][pos[1]].yval, 100, 50, 5))
        setTimeout(() => {
            createEvilLaser(pos)
        }, Math.random() * 9999 +  5000)
    }
}

function moveEvilLasers(){
    for(let i = 0; i<evilLasers.length; i++){
        evilLasers[i].xval -= evilLasers[i].velo
        canvas.drawImage(evilLasers[i], evilLasers[i].xval, evilLasers[i].yval, evilLasers[i].sizex, evilLasers[i].sizey)

        if(evilLasers[i].xval < -evilLasers[i].sizex){
            evilLasers.splice(i, 1)
            i--
        }
    }
}









function makeEnimies() {
    for (let j = 0; j < 3; j++) {
        evilShips[j] = []
        for (let i = 0; i < 5; i++) { //OFFSET + NUMINROW * (SIZE + PADDING)
            evilShips[j][i] = createImage("rec/Police_Cruiser.png", 750 + j * (150 + 75), 50 + i * (75 + 50), 150, 75, 2)
        }
    }
}

function drawScore() {
    canvas.fillStyle = "#FFFFFF"
    canvas.font = "48px serif";
    canvas.fillText("Ships Hit: " + score, 0, 48)
}

function drawGoodLaser() {
    if(goodLazer.xval + goodLazer.sizex > 1600){
        laserInMotion = false
        goodLazer.visi = false
    }
    if (goodLazer.visi) {
        goodLazer.xval += goodLazer.velo
        canvas.drawImage(goodLazer, goodLazer.xval, goodLazer.yval, goodLazer.sizex, goodLazer.sizey)
    }
}

function goodLaserCheckCollisions() {
    for (let i = 0; i < evilShips.length; i++) {
        for (let j = 0; j < evilShips[i].length; j++) {
            if (evilShips[i][j] !== null) {
                if (goodLazer.xval + goodLazer.sizex > evilShips[i][j].xval) {
                    if (goodLazer.xval < evilShips[i][j].xval + evilShips[i][j].sizex) {
                        if (goodLazer.yval + goodLazer.sizey > evilShips[i][j].yval) {
                            if (evilShips[i][j].yval + evilShips[i][j].sizey > goodLazer.yval) {
                                evilShips[i][j] = null
                                goodLazer.yval = 0
                                goodLazer.xval = 0
                                goodLazer.visi = false
                                laserInMotion = false
                                score++
                                return
                            }
                        }
                    }
                }
            }
        }
    }
}

function checkbadLasersCollision(){
    for(let i = 0; i<evilLasers.length; i++){
        let s = evilLasers[i]
        if(player.xval + player.sizex > s.xval){
            if(player.yval< s.yval + s.sizey) {
                if(player.yval + player.sizey > s.yval) {
                    playerLives--
                    evilLasers.splice(i, 1)
                    i--
                }
            }
        }
    }
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
        }
    }
    if (keycode == 83) {
        if (player.yval < 750 - player.sizey) {
            player.yval += 5
        }
    }
    if (keycode == 32) {
        if(!laserInMotion) {
            goodLazer.xval = player.xval
            goodLazer.yval = player.yval
            goodLazer.visi = true
            laserInMotion = true
        }
    }

});