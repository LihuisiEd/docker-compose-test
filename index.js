const express = require('express')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient

// Connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/testdb';

app.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send('💥 BOOM 💥: ' + err);
      console.log("Error al conectarse a la base de datos de MongoDB:"+ err);
    } else {
      res.send('Me conecté a la DB! 😎');
      console.log("Conexión exitosa a la base de datos de MongoDB");
      db.close();
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))