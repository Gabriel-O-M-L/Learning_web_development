function simples(cap,time,tax){
    return cap*tax*time
}
function comp(cap,time,tax){
    return cap*(Math.pow((1+tax),time))
}
console.log("simples:" + simples(1,2,3)+ " complexo:" + comp(1,2,3))