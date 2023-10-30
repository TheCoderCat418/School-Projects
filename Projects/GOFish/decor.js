let colorer = "off"

export function blink(id){
    if("BY" === colorer){
        setTimeout(() => { blink(id) }, 500);
    }
}
export function stopBlink(){
    colorer = "off"
}
export function startBlink(){
    colorer = "BY"
}

