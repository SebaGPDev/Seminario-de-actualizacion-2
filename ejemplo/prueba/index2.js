import { mostrarSaludo } from './index.js';

function mostrarDespedida() {
    mostrarSaludo();
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = "¡Hasta luego!";
}

document.getElementById('btn').addEventListener('click', mostrarDespedida)