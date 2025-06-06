function exercicio7(){
    let maior50 = 0, mediaaltura = 0, pessoa40 = 0, i = 1,  porcentagem, idade, peso, altura

    for ( i = 1 ; i < 6; i++) { 
        do{
        idade = prompt(`Digite a idade da ${i} pessoa`); 
        } while (idade <= 0)

        do{
        peso = prompt(`Digite o peso da ${i} pessoa`);
        }while (peso <= 0)
            
        do{
        altura = prompt(`Digite a altura da ${i} pessoa`);
        }while (altura <= 0)

        if (idade > 50){
           maior50++
        }
        else if (idade >= 10 || idade <= 20){
            number (mediaaltura = mediaaltura + altura)
        }
        if (peso < 40){
            pessoa40++
        }

        porcentagem = pessoa40 / (i*100).toFixed(1)
    }

    alert(
        `Pessoas com mais de 50 anos: ${maior50}\n` +
        `Media das alturas das pessoas com idade entre 10 e 20 anos: ${mediaaltura}\n` +
        `Porcentagem das pessoas com menos de 40kgs: ${porcentagem}\n` 
    );
}