// Variavel composta - Array 

let num = [2, 7, 8, 3, 4]

num.push(1)

console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)

if (pos === -1) {
    console.log("O valor nao foi encontrado")
} else {
    console.log(`O valor esta na posição ${pos}`)
}

// Repetição - For  

for(let pos=0; pos<num.length; pos++) {  // ate o final das posiçoes do array 
    console.log(num[pos])
}


 