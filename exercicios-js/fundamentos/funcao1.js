function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)

//Função com retorno
function soma(a, b = 0) {
    return a + b 
}

soma(2,3)
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())