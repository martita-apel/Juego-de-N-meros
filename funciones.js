// Caso 1

function caso1() {
  var num = prompt("Ingresa un número del 1 al 100: ");
  if (num <= 100) {
    document.getElementById("resp_caso1").innerHTML =
      "El número ingresado es:" +
      "<br>" +
      "<p class=" +
      "num" +
      ">" +
      num +
      "</p>";
  } else {
    num = prompt("Tu número es incorrecto, ingresa otro número del 1 al 100: ");
    document.getElementById("resp_caso1").innerHTML =
      "El número ingresado es:" +
      "<br>" +
      "<p class=" +
      "num" +
      ">" +
      num +
      "</p>";
  }
  console.log(num);
}

// Caso 2

function caso2() {
  var respuesta = prompt("¿De qué color es el caballo blanco de Napoleón?");
  if (respuesta === "blanco" || respuesta === "Blanco") {
    document.getElementById("resp_caso2").innerHTML =
      "¡Felicidades," + "<br>" + "tu respuesta es correcta!";
  } else if (respuesta !== "blanco" || respuesta !== "Blanco") {
    respuesta = prompt(
      "Tu respuesta es incorrecta, ¿de qué color es el caballo blanco de Napoleón?"
    );
  }
}

// Caso 3
var ramos = new Array("Matemáticas", "Física", "Ciencia");
var total = 0;

function caso3() {
  for (let i = 0; i < ramos.length; i++) {
    var notas = prompt("Ingrese el promedio de notas de " + ramos[i]);
    total += parseInt(notas);
  }
  var promedio = total / 3;
  document.getElementById("resp_caso3").innerHTML =
    "Tu promedio de notas es: " +
    "<br>" +
    "<p class=" +
    "promedio" +
    ">" +
    promedio +
    "</p>";
  total = 0;
}

// Caso 4

function caso4() {
  document.getElementById("resp_caso4").innerHTML = "";
  var frutas = [];
  for (let i = 0; i < 3; i++) {
    var fruta = prompt(
      "Escribe el nombre de tu " + (i + 1) + "º fruta favorita: "
    );
    frutas.push(fruta);
  }
  const manzana = /manzana/i;
  for (let i = 0; i < frutas.length; i++) {
    if (!frutas[i].match(manzana) && frutas[i].match(/\D/i)) {
      document.getElementById("resp_caso4").innerHTML +=
        "<p class=" + "frutas" + ">" + frutas[i] + "</p>" + "<br>";
    }
  }
}

// Caso 5

function caso5() {
  var nombre = prompt("Escribe tu nombre: ");
  const letras = /[a-zA-Z]/gim;
  const vocales = /[aeiou]/gim;
  const conson = /[^aeiou]/gim;
  document.getElementById("resp_caso5").innerHTML =
    nombre.match(letras) +
    "<br>" +
    "tiene sólo " +
    "<br>" +
    nombre.match(conson).length +
    " consonantes," +
    "<br>" +
    "y " +
    nombre.match(vocales).length +
    " vocales.";
}
