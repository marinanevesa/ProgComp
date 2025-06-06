function exercicio8() {
    let idade, peso, altura, olho, cabelo;
    let cond1 = 0, div2 = 0, cond2 = 0, olhoazul = 0, cond4 = 0;

    for (let i = 0; i < 6; i++) {
        // Validação da idade
        do {
            idade = prompt(`Digite a idade da ${i + 1}ª pessoa:`);
            idade = Number(idade);
        } while (idade < 0 || idade > 100);

        // Validação do peso
        do {
            peso = prompt(`Digite o peso da ${i + 1}ª pessoa:`);
            peso = Number(peso);
        } while (peso < 0 || peso > 300);

        // Validação da altura (em cm)
        do {
            altura = prompt(`Digite a altura da ${i + 1}ª pessoa (em centímetros):`);
            altura = Number(altura);
        } while (altura < 0 || altura > 250);

        // Validação da cor dos olhos
        do {
            olho = prompt(`Digite a cor dos olhos da ${i + 1}ª pessoa (A, P, V, C):`);
            olho = olho.toUpperCase();
        } while (olho !== "A" && olho !== "P" && olho !== "V" && olho !== "C");

        // Validação da cor do cabelo
        do {
            cabelo = prompt(`Digite a cor do cabelo da ${i + 1}ª pessoa (P, C, L, R):`);
            cabelo = cabelo.toUpperCase();
        } while (cabelo !== "P" && cabelo !== "C" && cabelo !== "L" && cabelo !== "R");

        // Condição 1: idade > 50 e peso < 60
        if (idade > 50 && peso < 60) {
            cond1++;
        }

        // Condição 2: altura < 150 cm
        if (altura < 150) {
            cond2 += idade;
            div2++;
        }

        // Condição 3: olhos azuis
        if (olho === "A") {
            olhoazul++;
        }

        // Condição 4: cabelo ruivo e olhos não azuis
        if (cabelo === "R" && olho !== "A") {
            cond4++;
        }
    }

    // Cálculos finais
    let mediaAltura = div2 > 0 ? (cond2 / div2).toFixed(2) : "Sem dados";
    let porcentagemOlhoAzul = ((olhoazul / 6) * 100).toFixed(2);

    alert(`Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60kg: ${cond1}\n` +
          `Média das idades das pessoas com altura inferior a 1,50m: ${mediaAltura}\n` +
          `Porcentagem de pessoas com olhos azuis: ${porcentagemOlhoAzul}%\n` +
          `Quantidade de pessoas ruivas que não possuem olhos azuis: ${cond4}`);
}
