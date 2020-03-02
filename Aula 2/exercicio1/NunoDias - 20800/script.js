function LerInput() {

    var texto = document.getElementById("numero").value;
    if (!texto.length) alert("sem conteudo no imput");
    document.getElementById("texto").innerText = texto

}