function exercicio10(){
    let nums, somaPares = 0, somaPrimos = 0, tabela = "Par - Primo - Outro"

    for(let i = 0; i < 10; i++){
        nums = Number(prompt(`Informe o ${i+1}º número`))
        if(nums != 2 && nums % 2 == 0){
            somaPares+= nums
            tabela+= `\n${nums}\t\t-\t\t-`
        } else{
            let div = 0
            for(let aux = nums; aux > 0; aux--){
                if(nums % aux == 0){
                    div++
                }
            }
            if(div == 2){
                somaPrimos+= nums
                tabela+= `\n-\t\t${nums}\t\t-`
            } else{
                tabela+= `\n-\t\t-\t\t${nums}`
            }
            
        }
    }

    console.log(tabela)
    console.log(`Soma dos números pares: ${somaPares}\n`+
                `Soma dos números primos: ${somaPrimos}`
    )
}