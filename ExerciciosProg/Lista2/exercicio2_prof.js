function exercicio2_prof(){
    let numero = []

    for (let i = 0; i < 10; i++){
        numero [i] = Number(prompt(`Informe um numero:`))
    }

    for (let i = 0; i < 10; i++){
        if (i % 2 == 0){
            numero[i]+=10
        } 
        else{
            numero[i] *= 5 
        }
    }

    console.log(numero)

}