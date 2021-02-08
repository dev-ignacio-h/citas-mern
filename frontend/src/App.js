import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';

import clienteAxios from './config/axios';

// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {
  // State de la app
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  // consumir api
  useEffect(() => {
    if (consultar) {
      const consultarAPI = () => {
        clienteAxios
          .get('/pacientes')
          .then((res) => {
            // colocar resultado en el state
            guardarCitas(res.data);
            // deshabilitar la consulta
            guardarConsultar(false);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      consultarAPI();
    }
  }, [consultar]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Pacientes citas={citas} />} />
        <Route
          exact
          path="/nueva"
          component={() => <NuevaCita guardarConsultar={guardarConsultar} />}
        />
        <Route exact path="/cita/:id" component={Cita} />
      </Switch>
    </Router>
  );
}

export default App;
