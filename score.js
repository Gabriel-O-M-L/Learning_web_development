function score(nota){
    if(nota < 40){
        return "reprovado"
    }
    else {
        let mult = 0
        let cont = 1
        while (nota > mult){
            mult = 5 * cont
            cont++
        }
        if(mult - nota < 3){

            nota = mult
        }
        return nota
    }
}
console.log(score(54))