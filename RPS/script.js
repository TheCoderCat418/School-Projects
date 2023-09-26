let botPlay, wins = 0, botwin = 0;

function play(id) {
    //document.getElementById()
    switch (gennum()) {
        case 0:
            document.getElementById("imga").src = "https://i.etsystatic.com/30512802/r/il/231676/4262629253/il_fullxfull.4262629253_7lky.jpg"
            botPlay = "r"
            break
        case 1:
            document.getElementById("imga").src ="https://i.redd.it/zkf5jfp0ul441.png"

            botPlay = "s"
            break
        case 2:
            document.getElementById("imga").src ="https://i.imgflip.com/5abvnc.jpg"
            botPlay = "p"
            break
        default:
            console.log("error")

    }
    if (botPlay !== id) {
        switch (id) {
            case "r":
                if (botPlay !== "s") {
                    document.getElementById("text").innerHTML = "Oh No! Try again."
                    botwin++
                } else {
                    wins++
                    document.getElementById("text").innerHTML = "Great Job! Your current score is " + wins + "."
                }
                break
            case "s":
                if (botPlay !== "p") {
                    document.getElementById("text").innerHTML = "Oh No! Try again."
                    botwin++
                } else {
                    wins++
                    document.getElementById("text").innerHTML = "Great Job! Your current score is " + wins + "."
                }
                break
            case "p":
                if (botPlay !== "r") {
                    document.getElementById("text").innerHTML = "Oh No! Try again."
                    botwin++
                } else {
                    wins++
                    document.getElementById("text").innerHTML = "Great Job! Your current score is " + wins + "."
                }
                break
        }
    } else {
        document.getElementById("text").innerHTML = "Tie!"
    }
}

function gennum() {
    return Math.round(Math.random() * 2);
}
