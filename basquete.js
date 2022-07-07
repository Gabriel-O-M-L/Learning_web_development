function best_worst(pont){
    let ret = Array(3)
    let max = pont[0]
    let con = number
    ret[1] = Math.min(pont)

    for i in pont{
        if (i > max){
            max = i
            con++
        }
    }
    ret[0] = max
    ret[2] = con
    return ret
}
console.log(best_worst())