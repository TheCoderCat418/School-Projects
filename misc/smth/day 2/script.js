let a;
let pig = new Image()
pig.src = "r/DVD_logo.svg.png"

function ani(){
    let canvas = document.getElementById("caned")
    let ctx = canvas.getContext("2d")
    ctx.drawImage(pig, 50,50,200,100)
    aacanimate()
}
let i = 50, max = 5, y = 50,may = 5
function aacanimate(){
     a = requestAnimationFrame(aacanimate)
    let canvas = document.getElementById("caned")
    let ctx = canvas.getContext("2d")
    drawBackground()
    if(i>2000){
        max=max*-1
    }
    if(y>900){
        may=may*-1
    }
    if(i<0){
        max=max*-1
    }
    if(y<0){
        may=may*-1
    }
    y+=may
    i+=max
    ctx.drawImage(pig, i,y,200,100)


}
function drawRectangle(x,y,w,h){
    let canvas = document.getElementById("caned")
    let ctx = canvas.getContext("2d")
    ctx.fillRect(x, y, w, h)
}
function drawBackground(){
    let canvas = document.getElementById("caned")
    let ctx = canvas.getContext("2d")
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(0, 0, 20000, 20000)
}
function STOP(){
    cancelAnimationFrame(a)
}