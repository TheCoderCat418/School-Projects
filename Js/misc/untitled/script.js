function decToBase(int){
    let base = parseInt(prompt("Enter Base to Convert to."))
    let num = prompt("Enter number to convert to specified base.")
    if(num === 0 || base>36){
        alert("Error")
        return
    }
    let basenum = ""

    if(int === 1){
        let pos = num.length-1
        let newnum2 = 0
        while (pos>=0) {
            console.log(num.charAt(pos), num.length-pos-1, num.charAt(pos), (2 ** num.length-pos-1) * num.charAt(pos))
            newnum2 += (2 ** (num.length-pos-1)) * num.charAt(pos)
            pos--
        }
        document.getElementById("p").innerHTML = newnum2.toString(base)
        return;
    }else {
        while (base <= num) {
            basenum = (num % base).toString(base) + basenum
            num -= num % base
            num = num / base
        }
        basenum = num + basenum
        document.getElementById("p").innerHTML = basenum.toUpperCase()
    }
}
function fac(){
    let finalnum = 1
    for(let i = parseInt(prompt("Enter number")); i>0; i--){
        finalnum = finalnum * i
    }
    document.getElementById("p").innerHTML = finalnum.toString().toUpperCase()
}