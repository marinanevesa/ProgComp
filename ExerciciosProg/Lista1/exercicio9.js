function exercicio9(){
        let idade = 0, peso = 0, altura = 0, media, conta, somaIdade = 0, pesoAltura90 = 0, Idade103090 = 0, porcentagem
 
        for(conta = 1; conta <= 10; conta++){
                idade = prompt(` Insira sua idade :`)
                peso = prompt(`Insira seu peso em kg `)
                altura = prompt(`Insira sua altura em metros : `)

                if(peso > 90 && altura < 1.50){
                pesoAltura90++
                }
                if(idade >= 10 && idade <= 30 && altura == 90){
                Idade103090++
                }

                somaIdade += idade
            }

            media = somaIdade / 10
            porcentagem = (Idade103090 / 10 ) * 100

            console.log(`A média das idades entre as 10 pessoas é  : ${media} \n
                  A quantidade das pessoas com peso superior a 90 kg e altura inferior a 1,50 é : ${pesoAltura90}    \n
                  A porcentagem de pessoas com idade entre 10 e 30 anos entre os que medem 1,90 é: ${porcentagem.toFixed(1)}% `)
        
    }