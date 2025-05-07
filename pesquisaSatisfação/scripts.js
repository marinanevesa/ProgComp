function pesquisaSatisfacao(){
    let participantes = 1, soma = 0, satisfeito = 0, insatisfeito = 0

    while(participantes <= 10){
        let nota = Number(prompt(`Participante ${participantes}, qual sua nota de satisfação?`));
        soma = soma + nota
        if(nota >= 8){
            satisfeito++
        } else if (nota < 5){
            insatisfeito++
        }
        participantes++
    }

    let media = soma / 10

    alert(`Satisfeitos: ${satisfeito}\n` + `Insatisfeitos: ${insatisfeito}\n` + `Média: ${media}`)
}