let ing = new Image()
ing.src = "r/bruh.png"
function inti(){
    clear()
    spawn()
    $(document).keydown((event) => {
        switch (event.keyCode) {
            case 83:
                console.log("up")
                chary+=5
                break
            case 65:
                console.log("left")
                charx-=5
                break
            case 87:
                console.log("down")
                chary-=5
                break
            case 68:
                console.log("right")
                charx+=5
                break
        }
        clear()
        spawn()
        checkColl()
        draw()
    })
}
let rx = 50 //Math.floor(Math.random()*2100), ry = Math.floor(Math.random()*900)
let ry = 50
function spawn(){
    let ctx = document.getElementById("caned").getContext("2d")
    let coin = new Image()
    coin .src = "r/currency-coin-cartoon-png.png"
    ctx.drawImage(coin, rx,ry ,100,100)
}
function checkColl(){
    if(charx+100>rx-25&&rx+75>charx){
        if(chary<ry+100&&chary+100>ry-30){
            rx = Math.floor(Math.random()*2100)
            ry = Math.floor(Math.random()*900)
        }
    }
}

function draw(){
    let ctx = document.getElementById("caned").getContext("2d")
    ctx.drawImage(ing, charx,chary,150,150)
}

let charx = 100 , chary = 100

function clear(){
    let ctx = document.getElementById("caned").getContext("2d")
    ctx.fillStyle = "#d01e1e"
    ctx.fillRect(0,0,2200, 1000)
}