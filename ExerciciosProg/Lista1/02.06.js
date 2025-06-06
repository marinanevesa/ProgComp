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

function exercicio8() {
    let idade, peso, altura, olho, cabelo;
    let cond1 = 0, div2 = 0, cond2 = 0, olhoazul = 0, cond4 = 0;

    for (let i = 0; i < 6; i++) {
        do {
            idade = prompt(`Digite a idade da ${i + 1}ª pessoa:`);
            idade = Number(idade);
        } while (idade < 0 || idade > 100);

        do {
            peso = prompt(`Digite o peso da ${i + 1}ª pessoa:`);
            peso = Number(peso);
        } while (peso < 0 || peso > 300);

        do {
            altura = prompt(`Digite a altura da ${i + 1}ª pessoa (em centímetros):`);
            altura = Number(altura);
        } while (altura < 0 || altura > 250);

        do {
            olho = prompt(`Digite a cor dos olhos da ${i + 1}ª pessoa (A, P, V, C):`);
            olho = olho.toUpperCase();
        } while (olho !== "A" && olho !== "P" && olho !== "V" && olho !== "C");

        do {
            cabelo = prompt(`Digite a cor do cabelo da ${i + 1}ª pessoa (P, C, L, R):`);
            cabelo = cabelo.toUpperCase();
        } while (cabelo !== "P" && cabelo !== "C" && cabelo !== "L" && cabelo !== "R");
qZ
        if (idade > 50 && peso < 60) {
            cond1++;
        }

        if (altura < 150) {
            cond2 += idade;
            div2++;
        }

        if (olho === "A") {
            olhoazul++;
        }

        if (cabelo === "R" && olho !== "A") {
            cond4++;
        }
    }

    let mediaAltura = div2 > 0 ? (cond2 / div2).toFixed(2) : "Sem dados";
    let porcentagemOlhoAzul = ((olhoazul / 6) * 100).toFixed(2);

    alert(`Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60kg: ${cond1}\n` +
          `Média das idades das pessoas com altura inferior a 1,50m: ${mediaAltura}\n` +
          `Porcentagem de pessoas com olhos azuis: ${porcentagemOlhoAzul}%\n` +
          `Quantidade de pessoas ruivas que não possuem olhos azuis: ${cond4}`);
}

function exercicio9(){
        let idade = 0, peso = 0, altura = 0, media, conta, somaIdade = 0, peso2 = 0, Idade2 = 0, porcentagem
 
        for(conta = 1; conta <= 10; conta++){
            idade = prompt(` Insira sua idade :`)
            peso = prompt(`Insira seu peso em kg `)
            altura = prompt(`Insira sua altura em metros : `)

            if(peso > 90 && altura < 1.50){
                peso2++
            }
            if(idade >= 10 && idade <= 30 && altura == 90){
                Idade2++
            }

            somaIdade += idade
        }

        media = somaIdade / 10
        porcentagem = (Idade2 / 10 ) * 100

        console.log(`A média das idades entre as 10 pessoas é  : ${media} \n
            A quantidade das pessoas com peso superior a 90 kg e altura inferior a 1,50 é : ${peso2}    \n
            A porcentagem de pessoas com idade entre 10 e 30 anos entre os que medem 1,90 é: ${porcentagem.toFixed(1)}% `)
        
    }

    function exercicio10(){
    let n, somaPares = 0, somaPrimos = 0, tabela = "Par - Primo - Outro"

    for(let i = 0; i < 10; i++){
        n = Number(prompt(`Informe o ${i+1}º número`))
        if(n != 2 && n % 2 == 0){
            somaPares+= n
            tabela+= `\n${n}\t\t-\t\t-`
        } else{
            let div = 0
            for(let aux = n; aux > 0; aux--){
                if(n % aux == 0){
                    div++
                }
            }
            if(div == 2){
                somaPrimos+= n
                tabela+= `\n-\t\t${n}\t\t-`
            } else{
                tabela+= `\n-\t\t-\t\t${n}`
            }
            
        }
    }

    console.log(tabela)
    console.log(`Soma dos números pares: ${somaPares}\n`+
                `Soma dos números primos: ${somaPrimos}`
    )
}