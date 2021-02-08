const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// crear server
const app = express();

// habilitar cors
// limitar acceso a api
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    const existe = whitelist.some((dominio) => dominio === origin);
    if (existe) callback(null, true);
    else callback(new Error('No permitido por CORS'));
  }
};
// app.use(cors(corsOptions));
app.use(cors());

// conectar a mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// habilitar bodyparser para extraer la petición al servidor
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// habilitar routing
app.use('/', routes());

// se define puerto
const port = process.env.PORT || 4000;
// puerto y arrancar el server
app.listen(port, () => {
  console.log('Servidor funcionando en el puerto' + port);
});
