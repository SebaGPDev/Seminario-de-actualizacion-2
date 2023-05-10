let datos = null

async function obtenerDatos() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    datos =  data
  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
  }
}

// document.getElementById("btn").addEventListener("click", obtenerDatos);

// Create a simple model.
const model = tf.sequential();

// Train the model using the data.
const entrenar = async () => {
    console.log(datos);

  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  // Prepare the model for training: Specify the loss and the optimizer.
  model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

  // Generate some synthetic data for training. (y = 2x - 1)
  const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [1, 1]);
  const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [1, 1]);

  await model.fit(xs, ys, { epochs: 250 });

  document.getElementById("res").innerText = "Entrenamiento terminado";
};

const predecir = () => {
  document.getElementById("micro-out-div").innerText = model
    .predict(tf.tensor2d([20], [1, 1]))
    .dataSync();
};
