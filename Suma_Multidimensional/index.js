function sumarMatrices() {
  var matriz1 = obtenerMatriz("matriz1");
  var matriz2 = obtenerMatriz("matriz2");

  if (validarSumaMatrices(matriz1, matriz2)) {
    var resultado = sumar(matriz1, matriz2);
    document.getElementById("resultado").textContent =
      "Resultado: " + resultado;
  } else {
    document.getElementById("resultado").textContent =
      "Las matrices no pueden sumarse. Asegúrese de que tengan las mismas dimensiones.";
  }

  return false; // Evita que la página se recargue al enviar el formulario
}

function obtenerMatriz(id) {
  var matrizTexto = document.getElementById(id).value;
  var filas = matrizTexto.trim().split("\n");
  var matriz = [];

  for (var i = 0; i < filas.length; i++) {
    var fila = filas[i].trim().split(/\s+/).map(Number);
    matriz.push(fila);
  }

  return matriz;
}

function sumar(matriz1, matriz2) {
  var filas = matriz1.length;
  var columnas = matriz1[0].length;
  var resultado = [];

  for (var i = 0; i < filas; i++) {
    var filaResultado = [];
    for (var j = 0; j < columnas; j++) {
      filaResultado.push(matriz1[i][j] + matriz2[i][j]);
    }
    resultado.push(filaResultado);
  }

  return resultado;
}

function validarSumaMatrices(matriz1, matriz2) {
  var filas1 = matriz1.length;
  var columnas1 = matriz1[0].length;
  var filas2 = matriz2.length;
  var columnas2 = matriz2[0].length;

  return filas1 === filas2 && columnas1 === columnas2;
}
