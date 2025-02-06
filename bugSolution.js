const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello, world!');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Something went wrong!'); // Send error response to client
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.8;
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 100);
  });
}