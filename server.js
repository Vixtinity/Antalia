const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());  // Middleware para manejar JSON en POST requests

// Endpoint para obtener usuarios
app.get('/api/usuarios', (req, res) => {
  const usuarios = JSON.parse(fs.readFileSync('./usuarios.json', 'utf-8'));
  res.json(usuarios);
});

// Endpoint para obtener data (archivo JSON)
app.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

// Endpoint para recibir datos (POST)
app.post('/api/data', (req, res) => {
  console.log(req.body);
  const newImage = req.body;
  const dataPath = path.join(__dirname, 'data.json');
  const currentData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const newId = currentData.length + 1;
  newImage.id = newId;
  currentData.push(newImage);
  fs.writeFileSync(dataPath, JSON.stringify(currentData, null, 2), 'utf-8');

  res.status(200).json({ message: 'Datos recibidos correctamente' });
});

app.get('/api/data/:id', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  const id = parseInt(req.params.id);

  const data = fs.readFileSync(dataPath, 'utf8');
  const images = JSON.parse(data);
  const image = images.find(img => img.id === id);

  res.json(image || {});
});

// Endpoint para manejar imágenes (POST)
app.post('/api/imagenes', (req, res) => {
  const imagenes = JSON.parse(fs.readFileSync('./imagenes.json', 'utf-8'));
  const nuevaImagen = req.body;

  const ultimoId = Math.max(...imagenes.map(i => i.id));
  nuevaImagen.id = ultimoId + 1;

  imagenes.push(nuevaImagen);
  fs.writeFileSync('./imagenes.json', JSON.stringify(imagenes, null, 2), 'utf-8');
  res.status(201).json(nuevaImagen);
});

app.listen(port, () => {
  console.log(`Enlace a la api: http://localhost:${port}/api/data`);
  console.log(`Enlace a la api: http://localhost:${port}/api/usuarios`);
});
