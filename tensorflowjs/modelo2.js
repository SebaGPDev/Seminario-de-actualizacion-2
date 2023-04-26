import * as tf from "@tensorflow/tfjs";

// Start at zero tensors
console.log("start", tf.memory().numTensors);

let keeper, chaser, seeker, beater;

// Now we'll create tensors inside a tidy
tf.tidy(() => {
  keeper = tf.tensor([1, 2, 3]);
  chaser = tf.tensor([1, 2, 3]);
  seeker = tf.tensor([1, 2, 3]);
  beater = tf.tensor([1, 2, 3]);
  // Now we're at four tensors in memory
  console.log("inside tidy", tf.memory().numTensors);
  // protect a tensor
  tf.keep(keeper);
  // returned tensors survive
  return chaser;
});
// Down to two
console.log("after tidy", tf.memory().numTensors);
keeper.dispose();
chaser.dispose();
// Back to zero
console.log("end", tf.memory().numTensors);
