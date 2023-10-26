let pDeck =1;










function start(){
    let x =[]
   for (let i = 0; i<4;i++){
       for (let j = 1; j<10;j++){
           x.push(j);
       }
   }
    for(let i=0; i<1000000;i++){
        let rnum = Math.floor(Math.random()*x.length)
        let rnum2 = Math.floor(Math.random()*x.length)
        let char = x[rnum]
        x[rnum] = x[rnum2]
        x[rnum2] = char
    }
    re
}