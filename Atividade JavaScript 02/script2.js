n = prompt("Digite um número: ");

for (i=0; i<11; i++) {
    document.getElementById("numero").innerHTML += n + "*" + i + " = " + (n * i) + " " + "<br>";
    console.log(i);
}