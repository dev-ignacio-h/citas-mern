const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

// crear server
const app = express();
// conectar a mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// habilitar routing
app.use('/', routes() )

// se define puerto
const port = process.env.PORT || 4000;
// puerto y arrancar el server
app.listen(port, () => {
  console.log('Servidor funcionando en el puerto' + port);
});
