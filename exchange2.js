var pesos = null;

var valorDolar = document.getElementById("valorDolar");
var cambiopeso = document.getElementById("cambio");



function changeDolar(){
    pesos = document.getElementById("pesosPag").value;
    let dolar = 355
    dolar = pesos / dolar;
    valorDolar.innerText = dolar;
    console.log(dolar)
    cambiopeso.textContent = "La cantidad de dolares son:"

}
function changetoPesos(){
let monto =  document.getElementById("pesosPag").value;
let dolar = 355;
 pesos = monto * dolar;
 valorDolar.innerText = pesos;
 console.log(pesos)
console.log(monto)
cambiopeso.textContent = "La cantidad de pesos son:"
}



var pesos2 = null;
var cambiopesoE = document.getElementById("cambioE");
var valorEuro = document.getElementById("valorEuro")

function changeEuro(){
    let euro = 363
    pesos2 = document.getElementById("pesosPagE").value;
    euro = pesos2 / euro;
    valorEuro.innerText = euro;
    console.log(euro);
    cambiopesoE.textContent = "La cantidad de euros son:"
}

function changetoPesosE(){
    let monto =  document.getElementById("pesosPagE").value;
    let euro = 363;
     pesos = monto * euro;
     valorEuro.innerText = pesos;
     console.log(pesos)
    console.log(monto)
    cambiopesoE.textContent = "La cantidad de pesos son:"
    }

    var Cdolar = 355
    var Ceuro = 363
function cotizacion(){
    alert("La cotizacion del Dolar es:  "+Cdolar+" pesos por dolar"+" La cotizacion del Euro es:  "+Ceuro+" pesos por euro")
}
