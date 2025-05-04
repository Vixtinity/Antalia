const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

app.listen(port, () => {
  console.log(`Enlace a la api: http://localhost:${port}/api/data`);
});
