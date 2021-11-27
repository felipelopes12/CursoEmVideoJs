let valores = [8, 5, 4, 6, 3, 2]

// console.log(valores)
valores.sort() //colocar em ordem crescente

/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// A maneira mais simples de fazer
for(let pos in valores) {
    console.log(`A posiçao pos ${pos} tem o valor ${valores[pos]}`)
}

