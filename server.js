const express = require('express');
const path = require('path');
const cors = require('cors'); // <-- Agregado

const app = express();
const port = 3000;

app.use(cors()); // <-- Agregado

app.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

const fs = require('fs');

app.get('/api/data/:id', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  const id = parseInt(req.params.id);

  const data = fs.readFileSync(dataPath, 'utf8');
  const images = JSON.parse(data);
  const image = images.find(img => img.id === id);

  res.json(image || {});
});

app.listen(port, () => {
  console.log(`Enlace a la api: http://localhost:${port}/api/data`);
});
