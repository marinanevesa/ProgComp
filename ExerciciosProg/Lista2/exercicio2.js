function exercicio2() {
    let vet = []; imprime_div2 = []; imprime_div3 = []; imprime_div2e3 = []; imprime_outros = [];calculo = 0;

    for (let i = 0; i < 7; i++) {
        vet.push(Number(prompt(`Informe o ${i + 1}º número:`)));
    }

    for (let i = 0; i < 7; i++) {
        calculo += vet[i];

        if (vet[i] % 2 === 0 && vet[i] % 3 === 0) {
            imprime_div2e3.push(vet[i]);
        } else if (vet[i] % 2 === 0) {
            imprime_div2.push(vet[i]);
        } else if (vet[i] % 3 === 0) {
            imprime_div3.push(vet[i]);
        } else {
            imprime_outros.push(vet[i]);
        }
    }

    console.log("Soma dos números: ",calculo);
    console.log("Divisíveis por 2 e 3:", imprime_div2e3);
    console.log("Somente divisíveis por 2:", imprime_div2);
    console.log("Somente divisíveis por 3:", imprime_div3);
    console.log("Não divisíveis por 2 nem 3:", imprime_outros);
}
