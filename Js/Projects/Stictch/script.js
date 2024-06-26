let animationFrame, canvas, player, evilShips = [], movingUp = false
let bonusbadguy = null;
let goodLazer, score = 0
let evilLasers = []
let laserInMotion = false
let playerLives = 3
let powerups = []
let bunker = []
let evilShipCanMove = true

function init() {
    canvas = document.getElementById("caned").getContext("2d")
    player = createImage("rec/The_Red_One.png", 0, 375, 150, 75)
    goodLazer = createImage("rec/LaysBeam.png", 0, 0, 100, 10, 5, false)
    setTimeout(() => {
        makePowerUp()
    }, 10000)
    makeEnimies()
    makeBunkers()
    animateLoop()
    for (let i = 0; i < evilShips.length; i++) {
        for (let j = 0; j < evilShips[i].length; j++) {
            setTimeout(() => {
                createEvilLaser([i, j])
            }, Math.random() * 9999 + 3000)

        }
    }
    setTimeout(() => {
        makeBonusBadGuy()
    }, 20000)

}

function animateLoop() {
    animationFrame = requestAnimationFrame(animateLoop);
    drawBackground()
    drawCharacter()
    moveEnemies()
    moveBonus()
    drawEnemies()
    drawBunkers()
    movePowerUps()
    drawGoodLaser()
    drawScore()
    displayBonusBadGuy()
    displayHealth()
    moveEvilLasers()
    checkbadLasersCollision()
    checkBadShipCollision()
    goodLaserCheckCollisions()
    checkBunkerCollision()
    checkBonusCollision()

    if (playerLives <= 0) {
        location.reload()
    }
}

function drawBackground() {
    canvas.fillStyle = "#18003f"
    canvas.fillRect(0, 0, 2000, 1250)
}

function makePowerUp() {
    let rnum = Math.floor(Math.random() * 4)
    if (rnum === 0) {
        p = createImage("rec/Uranium_Fuel_Rod.png", 1250, Math.random() * 700, 50, 50, 2, true, "speed")
    } else if (rnum === 1) {
        p = createImage("rec/heart-png-38780.png", 1250, Math.random() * 700, 50, 50, 2, true, "heal")
    } else if (rnum === 2) {
        p = createImage("rec/ice.png", 1250, Math.random() * 700, 50, 50, 2, true, "slow")
    } else {
        p = createImage("rec/repair.png", 1250, Math.random() * 700, 50, 50, 2, true, "repair")
    }
    powerups.push(p);
    let t = 5000
    // if (playerLives > 3) {
    //     t += 7500;
    // }
    setTimeout(() => {
        makePowerUp()
    }, Math.random() * 7500 + t)
}

function movePowerUps() {
    for (let i = 0; i < powerups.length; i++) {
        if (player.xval + player.sizex > powerups[i].xval) {
            if (player.yval < powerups[i].yval + powerups[i].sizey) {
                if (player.yval + player.sizey > powerups[i].yval) {
                    if (powerups[i].type === "heal") {
                        playerLives++
                    } else if (powerups[i].type === "speed") {
                        goodLazer.velo += 10
                        setTimeout(() => {
                            goodLazer.velo -= 10
                        }, 6000)
                    } else if (powerups[i].type === "slow") {
                        evilShipCanMove = false
                        setTimeout(() => {
                            evilShipCanMove = true
                        }, 6000)
                    } else if (powerups[i].type === "repair") {
                        for (let i = 0; i < bunker.length; i++) {
                            bunker[i].health += 5
                            bunker[i].visi = true

                        }
                    }
                    powerups.splice(i, 1)
                    break
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

function displayHealth() {
    for (let i = 0; i < playerLives; i++) {
        canvas.drawImage(createImage("rec/heart-png-38780.png"), 400 + i * (50 + 25), 10, 50, 50)
    }
}

function moveEnemies() {

    let bottom = [1, -1]
    for (let j = 0; j < evilShips.length; j++) {
        for (let i = 0; i < evilShips[j].length; i++) {
            if (evilShips[j][i] !== null && i > bottom[1]) {
                bottom = [j, i]
            }
        }
    }
    let top = [-1, 4]
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
            if (evilShips[j][i] !== null && evilShipCanMove) {
                if (movingUp) {
                    evilShips[j][i].yval -= evilShips[j][i].velo
                } else {
                    evilShips[j][i].yval += evilShips[j][i].velo
                }
                evilShips[j][i].xval -= 0.15
            }
        }
    }
}

function checkBadShipCollision() {
    for (let i = 0; i < evilShips.length; i++) {
        for (let j = 0; j < evilShips[i].length; j++) {
            if (evilShips[i][j] !== null) {
                if (player.xval + player.sizex > evilShips[i][j].xval) {
                    if (player.xval < evilShips[i][j].xval + evilShips[i][j].sizex) {
                        if (player.yval + player.sizey > evilShips[i][j].yval) {
                            if (evilShips[i][j].yval + evilShips[i][j].sizey > player.yval) {
                                playerLives -= playerLives;
                            }
                        }
                    }
                }
            }
        }
    }
}

function makeBunkers() {
    for (let i = 0; i < 2; i++) {
        let bunk = createImage("rec/bunker.png", player.xval + player.sizex, Math.random() * 650, 100, 100, 0, true)
        bunk.health = 5
        bunker.push(bunk)
    }
}

function drawBunkers() {
    for (let i = 0; i < bunker.length; i++) {
        if (bunker[i].health <= 0) {
            bunker[i].visi = false
            bunker[i].health = 0
        }
        if (bunker[i].visi) {
            canvas.drawImage(bunker[i], bunker[i].xval, bunker[i].yval, bunker[i].sizex, bunker[i].sizey)
            canvas.font = "20px sans-serif"
            canvas.fillStyle = "#ffffff"
            canvas.fillText(bunker[i].health, bunker[i].xval + bunker[i].sizex / 2, bunker[i].yval + bunker[i].sizey / 2 + 20)
        }
    }
}

function checkBunkerCollision() {
    for (let i = 0; i < bunker.length; i++) {
        if (bunker[i].visi) {
            for (let j = 0; j < evilLasers.length; j++) {

                if (bunker[i].xval + bunker[i].sizex > evilLasers[j].xval) {
                    if (bunker[i].xval < evilLasers[j].xval + evilLasers[j].sizex) {
                        if (bunker[i].yval + bunker[i].sizey > evilLasers[j].yval) {
                            if (evilLasers[j].yval + evilLasers[j].sizey > bunker[i].yval) {
                                bunker[i].health--
                                evilLasers.splice(j, 1)
                                j--
                            }
                        }
                    }
                }
            }
            if (goodLazer.xval + goodLazer.sizex > bunker[i].xval) {
                if (goodLazer.xval < bunker[i].xval + bunker[i].sizex) {
                    if (goodLazer.yval + goodLazer.sizey > bunker[i].yval) {
                        if (bunker[i].yval + bunker[i].sizey > goodLazer.yval) {
                            bunker[i].health--
                            goodLazer.yval = 0
                            goodLazer.xval = 0
                            goodLazer.visi = false
                            laserInMotion = false
                        }
                    }
                }
            }
        }
    }
}

function makeBonusBadGuy() {
    bonusbadguy = createImage("rec/Police_Cruiser.png", 1200, 500, 300, 150, 4)
}

function displayBonusBadGuy() {
    if (bonusbadguy !== null) {
        canvas.drawImage(bonusbadguy, bonusbadguy.xval, bonusbadguy.yval, bonusbadguy.sizex, bonusbadguy.sizey)
    }
}

let bonusMovingDown = false

function moveBonus() {
    if (bonusbadguy !== null) {
        if (bonusbadguy.yval < 0) {
            bonusMovingDown = true
        }
        if (bonusbadguy.yval + bonusbadguy.sizey > 750) {
            bonusMovingDown = false
        }
        if (bonusMovingDown) {
            bonusbadguy.yval += bonusbadguy.velo
        } else {
            bonusbadguy.yval -= bonusbadguy.velo
        }
    }
}

function checkBonusCollision() {
    if (bonusbadguy !== null) {
        if (goodLazer.xval + goodLazer.sizex > bonusbadguy.xval) {
            if (goodLazer.xval < bonusbadguy.xval + bonusbadguy.sizex) {
                if (goodLazer.yval + goodLazer.sizey > bonusbadguy.yval) {
                    if (bonusbadguy.yval + bonusbadguy.sizey > goodLazer.yval) {
                        bonusbadguy = null;
                        score += 20;
                    }
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

function createEvilLaser(pos) {
    if (evilShips[pos[0]][pos[1]] !== null) {
        evilLasers.push(createImage("rec/Laser-Beam-PNG-HD-Image.png", evilShips[pos[0]][pos[1]].xval, evilShips[pos[0]][pos[1]].yval, 100, 25, 5))
        setTimeout(() => {
            createEvilLaser(pos)
        }, Math.random() * 9999 + 5000)
    }
}

function moveEvilLasers() {
    for (let i = 0; i < evilLasers.length; i++) {
        evilLasers[i].xval -= evilLasers[i].velo
        canvas.drawImage(evilLasers[i], evilLasers[i].xval, evilLasers[i].yval, evilLasers[i].sizex, evilLasers[i].sizey)

        if (evilLasers[i].xval < -evilLasers[i].sizex) {
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
    if (goodLazer.xval + goodLazer.sizex > 1600) {
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

function checkbadLasersCollision() {
    for (let i = 0; i < evilLasers.length; i++) {
        let s = evilLasers[i]
        if (player.xval + player.sizex > s.xval) {
            if (player.yval < s.yval + s.sizey) {
                if (player.yval + player.sizey > s.yval) {
                    playerLives--
                    evilLasers.splice(i, 1)
                    i--
                }
            }
        }
    }
}


let createImage = function (src, xcoord, ycoord, sizex, sizey, velo, visi, type) {
    let img = new Image()
    img.src = src;
    img.xval = xcoord;
    img.yval = ycoord;
    img.velo = velo;
    img.visi = visi;
    img.sizex = sizex
    img.sizey = sizey
    img.type = type
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
        if (!laserInMotion) {
            goodLazer.xval = player.xval
            goodLazer.yval = player.yval
            goodLazer.visi = true
            laserInMotion = true
        }
    }

});