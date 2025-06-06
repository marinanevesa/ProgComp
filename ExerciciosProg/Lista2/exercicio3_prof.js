function exercicio3_prof() {
    let pergunta = [];
    let GostouMuito = [];
    let Gostou = [];
    let NaoGostou = [];

    for (let i = 0; i < 10; i++) {
        do{
            pergunta[i] = Number(prompt(`${i + 1}° Pesquisa de opinião:\n1 - Gostou muito\n2 - Gostou\n3 - Não gostou`));
        } while((pergunta[i] != 1) && (pergunta[i] != 2) && (pergunta[i] != 3));
        }

    for (let i = 0; i < 10; i++) {
        switch (pergunta[i]) {
            case 1:
                GostouMuito.push("Gostou muito");
                break;
            case 2:
                Gostou.push("Gostou");
                break;
            case 3:
                NaoGostou.push("Não gostou");
                break;
            default:
                console.log(`Resposta inválida na posição ${i}: ${pergunta[i]}`);
        }
    }

    console.log("Quantidade de pessoas que gostaram muito:", GostouMuito.length);
    console.log("Quantidade de pessoas que gostaram:", Gostou.length);
    console.log("Quantidade de pessoas que não gostaram:", NaoGostou.length);
    console.log("Porcentagem de pessoas que não gostaram:", ((NaoGostou.length / 10) * 100).toFixed(2) + "%");
}
