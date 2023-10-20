let movies = ["spacecamp", "wall-e","indianajones", "starwars","missionimpossible", "charliebrownchristmas", "elf", "rudolphtherednosedreindeer", "homealone", "polorexpress"]
let imgMovies = ["imgs/spacecamp.jpg", "imgs/wall-e.jpg", "imgs/inde.jpg", "imgs/sw.jpg", "imgs/mi1.jpg", "imgs/cbc.jpg", "imgs/elf.jpg", "imgs/rtrnr.jpg", "imgs/ha.jpg", "imgs/pe.jpg"], smovie = "", points = 0

function pickRandom(){
    let rnum = Math.floor(Math.random()*movies.length)
    smovie = movies[rnum]
    document.getElementById("mimg").src = imgMovies[rnum]
}

function subed(){
    if(smovie === document.getElementById("textbx").value){
        points++;
    }
    document.getElementById("textbx").value = ""
    pickRandom()
}