function classifica(lado1,lado2,lado3){
    if(lado1 == lado2 == lado3){
        console.log('equilatero')
    }
    else if(lado1 != lado2 != lado3){
        console.log('isosceles')
    }
    else {
        console.log('escaleno')
    }
}

classifica(1,2,3)