function pesquisaSatisfacao(){
    let participantes = 1, soma = 0, satisfeito = 0, insatisfeito = 0, nota, media = 0

    while(participantes <= 10){
        nota = Number(prompt(`Participante ${participantes}, qual sua nota de satisfação?`));
        soma += nota

        if(nota >= 8 && nota <= 10){
            satisfeito++
        } else if (nota < 5 && nota >= 10){
            insatisfeito++
        }
        else if (nota < 0 || nota > 10){
            alert (`invalido`)
            continue
        }
        soma += nota
        participantes++
    }

    media = soma / 10

    alert(`Satisfeitos: ${satisfeito}\n` + `Insatisfeitos: ${insatisfeito}\n` + `Média: ${media.toFixed(2)}`)
}