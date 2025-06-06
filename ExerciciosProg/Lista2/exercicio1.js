function exercicio1(){
    let vet = []; numero_par = 0; numero_impar= 0; soma_par = 0; soma_impar = 0, imprime_par = []; imprime_impar = []

    for (let i = 0; i< 6; i++){
        vet.push(Number (prompt(`Informe o ${i+1}º número: `)))
    }

    for (let i = 0; i < 6; i++){
        if(vet[i] % 2 == 0){
            soma_par += vet[i]
            imprime_par.push(vet[i])
        } 
        else{
            soma_impar += vet[i]
            imprime_impar.push(vet[i])
        }
    }
        alert(`Numeros pares: ${imprime_par}\n` +
          `Quantidade de numeros pares ${imprime_par.length}\n` +
          `Soma dos numeros pares: ${soma_par}\n` +
          `Numeros Impares: ${imprime_impar}\n` +
          `Quantidade de numeros impares: ${imprime_impar.length}\n` +
          `Soma dos numero impares: ${soma_impar}`);
}