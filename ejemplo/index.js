// const btn = document.getElementById("btn");
// const model = tf.sequential();

// async function loadData() {
//   const response = await fetch("./data.json");
//   const data = await response.json();
//   const xs = tf.tensor(data.datos.entradas, [6, 1]);
// //   const ys = tf.tensor(data.salidas, [6, 1]);

// console.log(data)

// return { xs, ys };

// }

// loadData()



// async function entrenar() {
//   const data = await loadData();

//   model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

//   // Prepare the model for training: Specify the loss and the optimizer.
//   model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

//   // Train the model using the data.
//   await model.fit(data.xs, data.ys, { epochs: 250 });
//   alert("terminó");
// }

// function predecir() {
//   const input = document.getElementById("input").value;
//   const output = model.predict(tf.tensor2d([input], [1, 1])).dataSync()[0];
//   document.getElementById("micro-out-div").innerText = output;
// }

// import { jsonData } from './getData.js';

// console.log(jsonData)

import fs from 'fs';

const data = fs.readFileSync('data.json', 'utf8');
const jsonData = JSON.parse(data);

datos = {}
datos.jsonData
console.log(jsonData);

// export.modules = datos