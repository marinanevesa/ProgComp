function exercicio4_2(){
    let numero, multiplo, resultado = 0, mensagem = ''

    numero = Number(prompt(`digite o numero que deseja: `));
    multiplo = Number(prompt(`digite o numero ate qual deseja ir: `));

    for (let i = 0; i <= multiplo; i++){
        resultado = numero * i
        mensagem += `\n ${numero} * ${i} = ${resultado}`
    }
    alert (`${mensagem}`)
}