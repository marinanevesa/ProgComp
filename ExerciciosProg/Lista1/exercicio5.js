function exercicio5(){
    let numero = 1, multiplo = 0, resultado=0, mensagem = ''

    while(numero <= 10){
        multiplo = 0 //limpar par rodar de novo
        mensagem = ''


        while (multiplo <= 10){
            resultado = numero * multiplo
            multiplo++
            mensagem += `\n ${numero} * ${multiplo-1} = ${resultado}`
           
        }
        alert (`${mensagem}`)
        numero++
        
    }
   
}
