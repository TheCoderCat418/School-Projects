function wow(){
drawRecked()
}
let pig = new Image()
pig.src = "r/y.jpg"
function drawRecked(){
    let canvas = document.getElementById("caned")
    let ctx = canvas.getContext("2d")
    ctx.fillStyle = "#d9d9d9"
    ctx.fillRect(100, 210, 300, 200)
    ctx.beginPath()
    ctx.arc(250, 210, 150, 0, 7) // circle
    ctx.fill()
    ctx.fillStyle = "#ff2525"
    ctx.fillRect(100, 210, 300, 200)
    ctx.fillStyle = "#dadada"
    for( let i =1 ; i<50; i+=5) {
        ctx.beginPath()
        ctx.arc(10 * i, 500, 100, 0, 7) // circle
        ctx.fill()
    }
    ctx.fillStyle = "rgb(55,130,255)"
    ctx.fillRect(250, 250, 100, 100)

    ctx.fillStyle = "rgb(121,8,8)"
ctx.font = "50px Ariel"
    ctx.fillText("624", 150, 300)
    //ctx.stroke();

    ctx.drawImage(pig, 275, 300, 50, 50)
}