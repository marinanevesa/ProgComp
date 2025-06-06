function exercicio3() {
    let codigos = [];
    let estoques = [];

    // Preenchendo os vetores
    for (let i = 0; i < 10; i++) {
        codigos.push(Number(prompt(`Informe o código do produto ${i + 1}:`)));
        estoques.push(Number(prompt(`Informe o estoque do produto ${codigos[i]}:`)));
    }

    while (true) {
        let codCliente = Number(prompt("Informe o código do cliente (0 para encerrar):"));

        if (codCliente === 0) {
            break
        }
        
        let codProduto = Number(prompt("Informe o código do produto desejado:"));
        let qtdDesejada = Number(prompt("Informe a quantidade desejada:"));

        // Procurar o produto manualmente
        let indice = -1;
        for (let i = 0; i < codigos.length; i++) {
            if (codigos[i] === codProduto) {
                indice = i;
                break;
            }
        }

        // Verificações
        if (indice === -1) {
            console.log("Código inexistente.");
        } else if (qtdDesejada > estoques[indice]) {
            console.log("Não temos estoque suficiente dessa mercadoria.");
        } else {
            estoques[indice] -= qtdDesejada;
            console.log("Pedido atendido. Obrigado e volte sempre.");
        }
    }

    console.log("Estoque atualizado:");
    for (let i = 0; i < 10; i++) {
        console.log(`Produto ${codigos[i]} - Estoque: ${estoques[i]}`);
    }
}
