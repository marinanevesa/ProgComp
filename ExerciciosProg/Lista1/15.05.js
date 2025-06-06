function exercicio1_2(){
   let a, b, c, d, conta = 1, aux, grupos = 1
   
    while (grupos <= 5){
    a = Number (prompt(`valor de A`)) 
    b = Number (prompt(`valor de b`)) 
    c = Number (prompt(`valor de c`)) 
    d = Number (prompt(`valor de d`))

      while (conta <= 3 ){
        if (a > b){
          aux = a; a =b; b = aux
        }
        if (b > c){
            aux = b; b =c; c = aux
        }
        if (c > d){
            aux = c; c =d; d = aux
        }
     conta++
     }
    
     alert (`Grupo ${grupos}` + `\nOrdem crescente ${a} ${b} ${c} ${d}` + `\nOrdem decresce ${d} ${c} ${b} ${a}`)

     grupos++
    }
}

function exercicio2() {
    let preco = 5.0,
        ingressosVendidos = 120,
        maiorLucro = -Infinity,
        melhorPreco = 0,
        melhorQtd = 0,
        lucro,
        relatorio = '';

    while (preco >= 1.0) {
        lucro = (preco * ingressosVendidos) - 200;

        relatorio += ` Preço do ingresso: R$ ${preco.toFixed(2)}` +
                     ` Ingressos vendidos: ${ingressosVendidos}` +
                     ` Lucro: R$ ${lucro.toFixed(2)}\n`;

        if (lucro > maiorLucro) {
            maiorLucro = lucro;
            melhorPreco = preco;
            melhorQtd = ingressosVendidos;
        }

        preco -= 0.5;
        ingressosVendidos += 26;
    }

    // Exibe o relatório completo primeiro (pode ser retirado se não quiser)
    alert(relatorio);

    // Exibe o melhor cenário encontrado
    alert(
        `Melhor cenário:\n` +
        `Preço do ingresso: R$ ${melhorPreco.toFixed(2)}\n` +
        `Ingressos vendidos: ${melhorQtd}\n` +
        `Lucro: R$ ${maiorLucro.toFixed(2)}`
    );
}

function exercicio3() {
    let idade, qntd_pessoas = 1, primeira = 0, segunda = 0, terceira = 0, quarta = 0, quinta = 0, porcentagem_um, porcentagem_dois

    while (qntd_pessoas <= 8) {
        idade = Number(prompt(`Qual a idade da ${qntd_pessoas}° pessoa?`));

        if (idade < 0) {
            alert("Idade inválida. Digite um valor maior ou igual a 0.");
            continue; // Volta para o início do laço sem contar como uma pessoa válida
        }

        if (idade <= 15) {
            primeira++;
        } else if (idade >= 16 && idade <= 30) {
            segunda++;
        } else if (idade >= 31 && idade <= 45) {
            terceira++;
        } else if (idade >= 46 && idade <= 60) {
            quarta++;
        } else {
            quinta++;
        }

        qntd_pessoas++;
    }

    porcentagem_um = (primeira / 8) * 100;
    porcentagem_dois = (quinta / 8) * 100;

    alert(`Na primeira faixa etária: ${primeira}\n` +
        `Na segunda faixa etária: ${segunda}\n` +
        `Na terceira faixa etária: ${terceira}\n` +
        `Na quarta faixa etária: ${quarta}\n` +
        `Na quinta faixa etária: ${quinta}\n` +
        `Porcentagem na 1ª faixa: ${porcentagem_um.toFixed(2)}%\n` +
        `Porcentagem na 5ª faixa: ${porcentagem_dois.toFixed(2)}%`);
}
