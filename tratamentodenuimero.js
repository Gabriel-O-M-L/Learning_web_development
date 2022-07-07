function decimals(a){
    return a.toFixed(2)
}
function floattreat(a){
    a = decimals(a)
    b = a.toString()
    b = b.replace(".",",")
    b = "R$" + b
    return b
}
console.log(floattreat(0.30000000000000004))