var arrayNumber = [];

function adicionarNumero() {
    var numero = document.getElementById("numbersId").value;

    arrayNumber.push(parseInt(numero));
    document.getElementById("numerosAdicionados").innerText = arrayNumber;

}

function calcularNumero() {

        var maiorNumero = Math.max.apply(Math, arrayNumber);
        alert(maiorNumero);

}