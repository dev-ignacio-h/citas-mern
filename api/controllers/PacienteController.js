// Cuando se crea un nuevo cliente

exports.nuevoCLiente = (req, res, next) => {
    console.log(req.body);
    res.json({ mensaje: 'El cliente se agregó correctamente' });
}