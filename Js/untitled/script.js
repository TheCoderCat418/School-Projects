let movies2 = ["indianajones", "missionimpossible", "speed", "united93", "fastfive"]
let movies1 = ["spacecamp", "wall-e", "starwars", "tomorrowland", "sunshine", "alien"]
let movies3 = ["charliebrownchristmas", "elf", "rudolphtherednosedreindeer", "homealone", "polorexpress"]

let imgmovies2 = ["imgs/inde.jpg", "imgs/mi1.jpg", "imgs/speed.jpg", "imgs/united93.jpg", "imgs/ff.jpg"]
let imgmovies1 = ["imgs/spacecamp.jpg", "imgs/wall-e.jpg", "imgs/sw.jpg", "imgs/tmmr.jpg", "imgs/ss.jpg", "imgs/alien.jpg"]
let imgmovies3 = ["imgs/cbc.jpg", "imgs/elf.jpg", "imgs/rtrnr.jpg", "imgs/ha.jpg", "imgs/pe.jpg"]



let smovie = "", points = 0, smovies = [], smingmovies=[], arr = 0, arrSucess = [{},{},{}], sectionclose = [false,false,false]

function pickRandom(){
let ava = []
    if(movies1.length!==0){
        ava[0] = 0
    }else{
        if(!sectionclose[0]){
            alert("Done with action")
            sectionclose[0] = true
        }
    }
    if(movies2.length!==0){
        ava[1] = 1
    }else{
        if(!sectionclose[1]){
            alert("Done with space")
            sectionclose[1] = true
        }
    }
    if(movies3.length!==0){
        ava[2] = 2
    }else{
        if(!sectionclose[2]){
            alert("Done with christmas")
            sectionclose[2] = true
        }
    }
if(ava.length === 0){
    endgame()
}
    let mnum = Math.floor(Math.random()*ava.length)
    switch (ava[mnum]){
        case 0:
            smovies = movies1;
            smingmovies = imgmovies1;
            arr = 0
            break;
        case 1:
            smovies = movies2;
            smingmovies = imgmovies2;
            arr = 1
            break;
        case 2:
            arr = 2
            smovies = movies3;
            smingmovies = imgmovies3;
            break;
    }
    let rnum = Math.floor(Math.random()*smovies.length)
    smovie = smovies[rnum]
    document.getElementById("mimg").src = smingmovies[rnum]
}

function subed(){
    if(smovie === document.getElementById("textbx").value){
        switch (arr){
            case 0:
                for(let i =0;i<imgmovies1.length;i++) {
                    if(movies1[i] === smovie) {
                        imgmovies1.splice(i, 1)
                        movies1.splice(i, 1)
                        arrSucess[0][arrSucess[0].length+1] = movies1[i]
                    }
                }
                break
            case 1:
                for(let i =0;i<imgmovies1.length;i++) {
                    if(movies2[i] === smovie) {
                        imgmovies2.splice(i, 1)
                        movies2.splice(i, 1)
                        arrSucess[1][arrSucess[1].length+1] = movies2[i]
                    }
                }
                break
            case 2:
                for(let i =0;i<imgmovies1.length;i++) {
                    if(movies3[i] === smovie) {
                        imgmovies3.splice(i, 1)
                        movies3.splice(i, 1)
                        arrSucess[2][arrSucess[2].length+1] = movies3[i]
                    }
                }
                break
        }
    }
    document.getElementById("textbx").value = ""
    pickRandom()
}
function endgame(){
    alert(arrSucess)
}