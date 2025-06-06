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