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