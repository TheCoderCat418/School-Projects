function runLoop(){
    let input = prompt("What is your favourite animal")
    alert(input.length)
    alert(input.charAt(1))
}

function runThing(){
    let input = prompt("What is your favorite city")
    let counter = 0
    while(counter !== input.length){
        alert(input.charAt(counter))
        counter++
    }
}
function loop2(){
    document.getElementById("123").innerHTML = ""
    for(let i = 0; i<300000000000; i++){
        let rnum = Math.floor(Math.random()*10)
        document.getElementById("123").innerHTML += rnum
    }
}