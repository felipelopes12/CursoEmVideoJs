var agora = new Date()
var hora = agora.getHours() //pega a hora atual
console.log(`Agora sao exatamente ${hora} horas.`)

if(hora >= 7 && hora < 12){
    console.log("Bom dia")
}
else if(hora > 12 && hora < 18){
    console.log("Boa tarde")
}
else{
    console.log("Boa noite")
}


// outra forma certa e mais simples

/* var horario = 5
console.log(`Agora sao exatamente ${hora} horas.`)

if(horario < 12){
    console.log("Bom dia")
}
else if(horario <= 18){
    console.log("Boa tarde")
}
else{
    console.log("Boa noite")
}
*/