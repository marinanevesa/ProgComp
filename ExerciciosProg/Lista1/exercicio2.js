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

