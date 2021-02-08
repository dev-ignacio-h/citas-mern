const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async(req, res, next) => {

  // crear datos de paciente con datos de req.body
  const paciente = new Paciente(req.body);

  try {
    await paciente.save();
    res.json({ mensaje: 'El cliente se agregó correctamente' });
  } catch (error) {
    console.log(error);
    next();
  }
  console.log(req.body);
};

// Cuando se solicita un listado de pacientes
exports.obtenerPacientes = async(req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes)    
  } catch (error) {
    console.log(error);
    next();
  }
};

// Cuando se solicita un paciente
exports.obtenerPaciente = async(req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id)
    res.json(paciente)
  } catch (error) {
    console.log(error);
    next();
  }
}

// Cuando se actualiza un paciente
exports.actualizarPaciente = async(req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {
      new: true
    });
    res.json(paciente);
  } catch (error) {
    console.log();
    next();
  }
}

// Cuando se elimina un paciente
exports.eliminarPaciente = async(req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndDelete({_id: req.params.id})
    res.json({mensaje: `${paciente.nombre} eliminado`})
    // res.json({ mensaje: `El paciente ${paciente.nombre} fue eliminado` })
  } catch (error) {
    console.log(error);
    next();
  }
}
