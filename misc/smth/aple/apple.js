let a,spwanTime=500;
let bask, apples = [], appscollected = 0, famps=0, hearts = []
let bullit;
function startAnimation(){
    animate()
}
function stopAnimation(){
    cancelAnimationFrame(a)
}

function animate() {
    if(famps !== 3) {
        a = requestAnimationFrame(animate)
        drawBackground()
        drawTree()
        drawBasket()
        moveApple()
        drawApple()
        drawHears()
        drawBullet()
        console.log(spwanTime, appscollected, spwanTime / 2 - (appscollected / 2))
        for (let i = 0; i < apples.length; i++) {
            if (checkCollisionsOfBasket(i)) {
                i = 0
            }
        }
    }else{
        let ctx = document.getElementById("myCanvas").getContext("2d");
        let ings = new Image()
        ings.src = "resources/aznrmij72wu4ma9mcads.jpg"
        ctx.drawImage(ings, 0,0,500,500)
        endGame()
    }
}
let aaa= 3
function endGame(){

    stopAnimation()
}
function initialize(){
    drawBackground()
    drawTree()
    createBasket()
    makeApple()
    createHearts()
}

let tree = new Image()
tree.src = "resources/tree.png"

function drawBackground(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#9bcbea"
    ctx.fillRect(0,0,500,500)

}

function drawTree(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(tree, 100, 0, 300, 500 )
}
function createBuller(){
    bullit = createImage("resources/Untitled.jpg", bask.left, 500, -10)
}
function drawBullet(){
    bullit.top += bullit.velo
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(bullit, bullit.left, bullit.top, 50, 50)
    if(bullit.top < -50){
        bullit = null
        canFire =true
    }
}
function drawBasket(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(bask, bask.left, bask.top, 50, 50)
}
function createBasket(){
    bask = createImage("resources/basket.png", 250, 425, 0)
}
function createHearts(){
    hearts[0] = createImage("resources/R.png", 10, 10, 0, true);
    hearts[1] = createImage("resources/R.png", 60, 10, 0, true);
    hearts[2] = createImage("resources/R.png", 110, 10, 0, true);
}
function drawHears(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    for(let i = 0; i<hearts.length;i++){
        if(hearts[i].visi){
            ctx.drawImage(hearts[i], hearts[i].left, hearts[i].top, 50, 50)
        }
    }



}
function makeApple(){
    apples[apples.length] = createImage("resources/apple.png",Math.floor(Math.random()*500), -50, 0.5)
    setTimeout(()=>{
        makeApple()
    }, 1000)
}
function moveApple(){
    for(let i = 0; i<apples.length; i++){
        apples[i].top+=apples[i].velo;
    }
}
function drawApple(){
    for(let i = 0; i<apples.length; i++){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(apples[i], apples[i].left, apples[i].top, 20, 20)
        if(apples[i].top > 500){
            apples.splice(i,1);
            famps++
            hearts[famps-1].visi = false
        }
    }
}


let createImage = function(src, xcoord, ycoord, velo, visi){
    let img = new Image()
    img.src = src;
    img.left = xcoord;
    img.top = ycoord;
    img.velo = velo;
    img.visi = visi
    return img;
}

let canFire = true

$(document).keydown((event) => {  //jQuery code to recognize a keydown event
    let keycode = (event.keyCode ? event.keyCode : event.which);

    if(keycode == 13){
        alert("I pushed enter")
    }

    if(keycode==65){
        bask.left-=5
    }
    if(keycode == 68){
        bask.left+=5
    }

    if(keycode == 87){
        //linkY = linkY -5
    }
    if(keycode== 83){
        //linkY = linkY +5
    }
    if(keycode == 32){
        if(canFire) {
            createBuller()
            canFire = false
        }
    }

});

function checkCollisionsOfBasket(i){
    if(apples[i].left+20>bask.left && apples[i].left<bask.left+50 && bask.top-20 < apples[i].top && bask.top+50>apples[i].top){
        apples.splice(i, 1);
        appscollected++
        return true
    }
    return false;
}