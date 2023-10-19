let movies = ["spacecamp"], imgMovies = ["imgs/spacecamp.jpg"], smovie = "", points = 0

function pickRandom(){
    let rnum = Math.floor(Math.random()*movies.length)
    smovie = movies[rnum]
    document.getElementById("mimg").src = imgMovies[rnum]
}





function subed(){
    if(smovie === document.getElementById("textbx").value){
        points++
    }
}