function mathQuiz(){
    let numQuestions = prompt("# correct questions?")
    let correct = 0
    for(let i = 0; numQuestions>i;i++){
        let rnum1 = Math.floor(Math.random()*20)
        let rnum2 = Math.floor(Math.random()*20)
        let awnser = prompt( rnum1+ " + " + rnum2 + "?")
        if (rnum1+rnum2 == awnser){
            correct++
            alert("Nice!")
        }else{
            i--
            alert("Try Again")
        }
    }
    alert("You got "+ correct + " correct!")
}
function vowelRemover(){
    let text = prompt("EnterText")
    let newText = ""
    for(let i = 0; i<text.length;i++){
        switch (text.charAt(i).toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                break;
            default:
                newText += text.charAt(i)
        }
    }
    alert(newText)
}