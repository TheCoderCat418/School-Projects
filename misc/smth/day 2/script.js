let a;
function ani(){
    let canvas = document.getElementById("caned")
    let ctx = canvas.getContext("2d")
    ctx.fillStyle = Math.floor(Math.random()*16777215).toString(16);
    aacanimate()
}
let i = 0
function aacanimate(){
     a = requestAnimationFrame(aacanimate)
    let canvas = document.getElementById("caned")
    let ctx = canvas.getContext("2d")
    drawBackground()
    ctx.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
    drawRectangle(i,50, 200,200)
    i+=1

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
    ctx.fillRect(0, 0, 2000, 2000)
}
function STOP(){
    cancelAnimationFrame(a)
}