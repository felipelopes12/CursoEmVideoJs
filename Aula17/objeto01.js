let amigo = {nome: 'José',
 sexo: 'M', 
 peso: 85.4,
engordar(p=0) { 
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)

console.log(`O aluno ${amigo.nome} esta pesando ${amigo.peso}Kg`)

// console.log(amigo.nome)