var n1 = prompt("Digite o primeiro valor: ");
var n2 = prompt("Digite o segundo valor: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
document.getElementById("test1").innerHTML = "Soma = " + (n1 + n2);
document.getElementById("test2").innerHTML = "Subtracao = " + (n1 - n2);
document.getElementById("test3").innerHTML = "Multiplicacao = " + (n1 * n2);
document.getElementById("test4").innerHTML = "Divisao = " + (n1 / n2);