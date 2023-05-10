async function obtenerDatos() {
  try {
    const response = await fetch("./data2.json");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
  }
}

document.getElementById("btn").addEventListener("click", obtenerDatos);
