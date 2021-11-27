var idade = 70
console.log('Eleiçoes')
console.log(`Voce tem ${idade} anos`)

if(idade < 16) {
    console.log("Com essa idade ainda não vota")
}
else if(idade < 18 || idade > 65) {
    console.log("O seu voto opcional")
    }
else {
    console.log("O seu voto Obrigatorio")
}
