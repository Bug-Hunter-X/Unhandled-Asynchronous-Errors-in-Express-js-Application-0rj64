const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    // Error handling missing
    console.error(err); // Logs the error but doesn't send an error response to the client
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  // Simulates an asynchronous operation that may fail
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.8; // 80% chance of success
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 100);
  });
}