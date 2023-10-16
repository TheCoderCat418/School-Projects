function main(){
    let rolls = []
    let rollTypes = [0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 0; i<100; i++) {
        let a = Math.floor(Math.random() * 6 + 1);
        a += Math.floor(Math.random() * 6 + 1)
        rolls.push(a)
    }
    document.getElementById("p").innerHTML = rolls.toString()
    let sixes = 0
    for(let i =0;i<rolls.length;i++){
        switch (rolls[i]){
            case 2:
                rollTypes[1] += 1
                break
            case 3:
                rollTypes[2] += 1
                break
            case 4:
                rollTypes[3] += 1
                break
            case 5:
                rollTypes[4] += 1
                break
            case 6:
                rollTypes[5] += 1
                break
            case 7:
                rollTypes[6] += 1
                break
            case 8:
                rollTypes[7] += 1
                break
            case 9:
                rollTypes[8] += 1
                break
            case 10:
                rollTypes[9] += 1
                break
            case 11:
                rollTypes[10] += 1
                break
            case 12:
                rollTypes[11] += 1
                break
        }
    }
    document.getElementById("p").innerHTML = rollTypes
}