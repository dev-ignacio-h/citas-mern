import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCita = () => {
  // Generar state como objeto
  const [cita, guardarCita] = useState({
    nombre: '',
    propietario: '',
    fecha: '',
    hora: '',
    telefono: '',
    sintomas: ''
  })
  // Leer datos del formulario
  const actualizarState = e => {
    // console.log('name', e.target.name); // campo
    // console.log('value', e.target.value); // valor
    guardarCita({
      ...cita,
      [e.target.name] : e.target.value
    })
  }
  return (
    <Fragment>
      <h1 className="my-5">Crear nueva cita</h1>
      {/* <div className="row"> */}
        <div className="col-12 mb-5 d-flex justify-content-center">
          <Link
            to={'/'}
            className="btn btn-success text-uppercase py-2 px-5 font-weight-bold"
          >
            Volver
          </Link>
        </div>

        <div className="col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6 mx-auto">
          {/* Comienzo formulario */}
          <form className="bg-white p-5 mb-3 bordered">
            <div className="form-group">
              <label htmlFor="nombre">Nombre Mascota</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="nombre"
                name="nombre"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="propietario">Nombre Propietario</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="propietario"
                name="propietario"
                placeholder="Nombre Propietario"
                onChange={actualizarState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                className="form-control form-control-lg"
                id="telefono"
                name="telefono"
                placeholder="Teléfono"
                onChange={actualizarState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="fecha">Fecha Alta</label>
              <input
                type="date"
                className="form-control form-control-lg"
                id="fecha"
                name="fecha"
                onChange={actualizarState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="hora">Hora Alta</label>
              <input
                type="time"
                className="form-control form-control-lg"
                id="hora"
                name="hora"
                onChange={actualizarState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="sintomas">Síntomas</label>
              <textarea
                className="form-control"
                name="sintomas"
                rows="6"
                onChange={actualizarState}
              ></textarea>
            </div>

            <input
              type="submit"
              className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold"
              value="Crear Cita"
            />
          </form>
          {/* Fin formulario */}
        </div>
      {/* </div> */}
    </Fragment>
  );
};

export default NuevaCita;
