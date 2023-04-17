const express = require("express");
const mongoose = require("mongoose");

const app = express();

// URL de conexión a la base de datos de MongoDB
const MONGO_URL = "mongodb://localhost:27017/mydatabase";

// Conexión a la base de datos de MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Conexión exitosa a la base de datos de MongoDB");
}).catch((error) => {
  console.log("Error al conectarse a la base de datos de MongoDB:", error);
});

// Ruta de prueba para verificar si la aplicación está conectada a la base de datos
app.get("/", (req, res) => {
  res.send("¡La aplicación está conectada a la base de datos de MongoDB!");
});

// Puerto en el que la aplicación escuchará las solicitudes
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`La aplicación está escuchando en el puerto ${PORT}`);
});