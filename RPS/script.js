let botPlay, wins = 0, botwin = 0;
function play(id) {
        if (botPlay !== id) {
            switch (id) {
                case "r":
                    if(botPlay === "s"){
                        document.getElementById("text").innerHTML = "Oh No! Try again."
                        botwin++
                    }else{
                        wins++
                        document.getElementById("text").innerHTML = "Great Job! Your current score is " + wins + "."
                    }
                    break
                case "s":
                    if(botPlay === "p"){
                        document.getElementById("text").innerHTML = "Oh No! Try again."
                        botwin++
                    }else{
                        wins++
                        document.getElementById("text").innerHTML = "Great Job! Your current score is " + wins + "."
                    }
                    break
                case "p":
                    if(botPlay === "r"){
                        document.getElementById("text").innerHTML = "Oh No! Try again."
                        botwin++
                    }else{
                        wins++
                        document.getElementById("text").innerHTML = "Great Job! Your current score is " + wins + "."
                    }
                    break
            }
        }else{
            document.getElementById("text").innerHTML = "Tie!"
        }
    }