const express = require('express');
const router = express.Router();
const PacienteController = require('../controllers/PacienteController')

module.exports = function () {
  // Agrega nuevos pacientes vía post
  router.post('/pacientes',
    PacienteController.nuevoCliente
  )
  // Obtener todos los registros de pacientes
  router.get('/pacientes',
    PacienteController.obtenerPacientes
  )
  // Obtener un paciente en específico
  router.get('/pacientes/:id',
    PacienteController.obtenerPaciente
  )

  return router;
};
