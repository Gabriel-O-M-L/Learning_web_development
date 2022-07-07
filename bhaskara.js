function bhaskara(a,b,c){
    let delta = Math.abs(Math.pow((b,2) - 4*a*c))
    let vec = Array(2)

    if (delta < 1){
        vec[0] = "delta"
        vec[1] = "negativo"
    }
    else {

        vec[0] = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2)
        vec[1] = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2)
    }
    return vec

}
console.log(bhaskara(3,-5,12))