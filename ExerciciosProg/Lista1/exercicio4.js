function exercicio4(){
    let numero, multiplo, i = 0, resultado = 0, mensagem = ''

    numero = Number(prompt(`digite o numero que deseja: `));
    multiplo = Number(prompt(`digite o numero ate qual deseja ir: `));

    while(i <= multiplo){
        resultado = numero * i
        i++
        mensagem += `\n ${numero} * ${i-1} = ${resultado}`
    }
    alert (`${mensagem}`)
}