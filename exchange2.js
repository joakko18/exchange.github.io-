var pesos = null;
var dolar = null;
var valorDolar = document.getElementById("valorDolar");



function changeDolar(){
    pesos = document.getElementById("pesosPag").value;
    dolar = pesos / 355;
    valorDolar.innerText = dolar;
    console.log(dolar)
}

var pesos2 = null;
var euro = null;
var valorEuro = document.getElementById("valorEuro")

function changeEuro(){
    pesos2 = document.getElementById("pesosPagE").value;
    euro = pesos2 / 368;
    valorEuro.innerText = euro;
    console.log(euro);

}
