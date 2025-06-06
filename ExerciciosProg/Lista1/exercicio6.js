function exercicio6(){
    let totalVista = 0, totalPrazo = 0, contador = 1

while (contador <= 15) {
  let codigo = prompt("Transação " + contador + ": Digite o código (V para à vista, P para a prazo):");

  if (codigo === "V" || codigo === "v") {
    let valor = prompt("Digite o valor da compra à vista:");

    if (valor != "" && valor * 1 >= 0) {
      totalVista = totalVista + (valor * 1);
      contador++
    } else {
      alert("Valor inválido. Digite um número positivo.");
    }

    } 
else if (codigo === "P" || codigo === "p") {

    let valor = prompt("Digite o valor da compra a prazo:");

    if (valor != "" && valor * 1 >= 0) {
      totalPrazo = totalPrazo + (valor * 1);
      contador = contador + 1;
    } else {
      alert("Valor inválido. Digite um número positivo.");
    }

  } else {
    alert("Código inválido. Digite apenas V ou P.");
  }
}

let totalGeral = totalVista + totalPrazo;
let primeiraParcela = totalPrazo / 3;

alert(
  "Resumo das compras:\n" +
  "- Total à vista: R$ " + totalVista.toFixed(2) + "\n" +
  "- Total a prazo: R$ " + totalPrazo.toFixed(2) + "\n" +
  "- Total geral: R$ " + totalGeral.toFixed(2) + "\n" +
  "- Primeira parcela das compras a prazo: R$ " + primeiraParcela.toFixed(2)
);
}

