function exercicio5_2(){
    let resultado=0, mensagem = ''

    for(let numero = 1; numero <= 10; numero++){
        multiplo = 0 //limpar par rodar de novo
        mensagem = ''


        for (let multiplo = 0; multiplo <= 10; multiplo ++){
            resultado = numero * multiplo
            mensagem += `\n ${numero} * ${multiplo} = ${resultado}`
           
        }
        alert (`${mensagem}`)
        
    }
}