import * as tf from "@tensorflow/tfjs";
const fs = require("fs");
const csv = require("csv-parser");

const data = [];

const model = tf.sequential();
model.add(tf.layers.dense({inputShape: [4], units: 8, activation: 'relu'}));
model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
model.compile({optimizer: 'sgd', loss: 'binaryCrossentropy', metrics: ['accuracy']});

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys, { epochs: 10 }).then(() => {
  // Use the model to do inference on a data point the model hasn't seen before:
  model.predict(tf.tensor2d([5], [1, 1])).print();
  // Open the browser devtools to see the output
});

fs.createReadStream("./data/data.csv")
  .pipe(csv())
  .on("data", (row) => {
    data.push(row);
  })
  .on("end", () => {
    // realiza cualquier acción de limpieza o preparación de datos aquí
  });
