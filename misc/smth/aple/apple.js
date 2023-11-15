let a;
let bask, apples = []

function startAnimation(){
    animate()
}
function stopAnimation(){
    cancelAnimationFrame(a)
}

function animate() {
    a = requestAnimationFrame(animate)
    drawBackground()
    drawTree()
    drawBasket()
    moveApple()
    drawApple()
}

function initialize(){
    drawBackground()
    drawTree()
    createBasket()
    makeApple()
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

function drawBasket(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(bask, bask.left, bask.top, 50, 50)
}
function createBasket(){
    bask = createImage("resources/basket.png", 250, 425, 0)
}
function makeApple(){
    apples[apples.length] = createImage("resources/apple.png",Math.floor(Math.random()*450-25), -50, 0.5)
    setTimeout(()=>{
        makeApple()
    }, 1)
}
function moveApple(){
    for(let i = 0; i<apples.length; i++){
        apples[i].top+=apples[i].velo;
        console.log(apples[i].top)
    }
}
function drawApple(){
    for(let i = 0; i<apples.length; i++){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(apples[i], apples[i].left, apples[i].top, 100, 100)
        if(apples[i].top > 400){
            apples.splice(i,1);
        }
    }
}


let createImage = function(src, xcoord, ycoord, velo){
    let img = new Image()
    img.src = src;
    img.left = xcoord;
    img.top = ycoord;
    img.velo = velo;

    return img;
}



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

});