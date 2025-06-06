function exercicio1() {
    let grupo = 1, primeiro, segundo, terceiro, quarto

    while (grupo <= 5) {
        // Entrada dos 4 valores
        let A = Number(prompt(`Grupo ${grupo} - Digite o valor A:`));
        let B = Number(prompt(`Grupo ${grupo} - Digite o valor B:`));
        let C = Number(prompt(`Grupo ${grupo} - Digite o valor C:`));
        let D = Number(prompt(`Grupo ${grupo} - Digite o valor D:`));

        // Verificando se A é o menor valor
        if (A <= B && A <= C && A <= D) {
            primeiro = A;

            // Verificando se B é o maior valor
            if (B >= C && B >= D) {
                quarto = B;

                // Comparando os dois valores restantes: C e D
                if (C <= D) {
                    segundo = C;
                    terceiro = D;
                } else {
                    segundo = D;
                    terceiro = C;
                }

            // Verificando se C é o maior valor
            } else if (C >= B && C >= D) {
                quarto = C;

                // Comparando os dois valores restantes: B e D
                if (B <= D) {
                    segundo = B;
                    terceiro = D;
                } else {
                    segundo = D;
                    terceiro = B;
                }

            // Se B e C não são os maiores, então D é o maior
            } else {
                quarto = D;

                // Comparando os dois valores restantes: B e C
                if (B <= C) {
                    segundo = B;
                    terceiro = C;
                } else {
                    segundo = C;
                    terceiro = B;
                }
            }

        // Verificando se B é o menor valor
        } else if (B <= A && B <= C && B <= D) {
            primeiro = B;

            // Verificando se A é o maior valor
            if (A >= C && A >= D) {
                quarto = A;

                // Comparando os dois valores restantes: C e D
                if (C <= D) {
                    segundo = C;
                    terceiro = D;
                } else {
                    segundo = D;
                    terceiro = C;
                }

            // Verificando se C é o maior valor
            } else if (C >= A && C >= D) {
                quarto = C;

                // Comparando os dois valores restantes: A e D
                if (A <= D) {
                    segundo = A;
                    terceiro = D;
                } else {
                    segundo = D;
                    terceiro = A;
                }

            // Se A e C não são os maiores, então D é o maior
            } else {
                quarto = D;

                // Comparando os dois valores restantes: A e C
                if (A <= C) {
                    segundo = A;
                    terceiro = C;
                } else {
                    segundo = C;
                    terceiro = A;
                }
            }

        // Verificando se C é o menor valor
        } else if (C <= A && C <= B && C <= D) {
            primeiro = C;

            // Verificando se A é o maior valor
            if (A >= B && A >= D) {
                quarto = A;

                // Comparando os dois valores restantes: B e D
                if (B <= D) {
                    segundo = B;
                    terceiro = D;
                } else {
                    segundo = D;
                    terceiro = B;
                }

            // Verificando se B é o maior valor
            } else if (B >= A && B >= D) {
                quarto = B;

                // Comparando os dois valores restantes: A e D
                if (A <= D) {
                    segundo = A;
                    terceiro = D;
                } else {
                    segundo = D;
                    terceiro = A;
                }

            // Se A e B não são os maiores, então D é o maior
            } else {
                quarto = D;

                // Comparando os dois valores restantes: A e B
                if (A <= B) {
                    segundo = A;
                    terceiro = B;
                } else {
                    segundo = B;
                    terceiro = A;
                }
            }

        // Se A, B e C não são os menores, então D é o menor
        } else {
            primeiro = D;

            // Verificando se A é o maior valor
            if (A >= B && A >= C) {
                quarto = A;

                // Comparando os dois valores restantes: B e C
                if (B <= C) {
                    segundo = B;
                    terceiro = C;
                } else {
                    segundo = C;
                    terceiro = B;
                }

            // Verificando se B é o maior valor
            } else if (B >= A && B >= C) {
                quarto = B;

                // Comparando os dois valores restantes: A e C
                if (A <= C) {
                    segundo = A;
                    terceiro = C;
                } else {
                    segundo = C;
                    terceiro = A;
                }

            // Se A e B não são os maiores, então C é o maior
            } else {
                quarto = C;

                // Comparando os dois valores restantes: A e B
                if (A <= B) {
                    segundo = A;
                    terceiro = B;
                } else {
                    segundo = B;
                    terceiro = A;
                }
            }
        }

        // Exibe os valores na ordem original, crescen,te e decrescente
        alert(
            `Grupo ${grupo}\n` +
            `Original: ${A}, ${B}, ${C}, ${D}\n` +
            `Crescente: ${primeiro}, ${segundo}, ${terceiro}, ${quarto}\n` +
            `Decrescente: ${quarto}, ${terceiro}, ${segundo}, ${primeiro}`
        );

        grupo++; // Add +1
    }
}


