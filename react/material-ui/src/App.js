import React from 'react';
import Inicio from './Inicio';
import Perfil from './Perfil';
import Login from './Login';
import EditarPerfil from './EditarPerfil';
import * as firebase from 'firebase';

import {
  makeStyles
} from '@material-ui/styles';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  CssBaseline,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Grid
} from '@material-ui/core';

import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Person as PersonIcon
} from '@material-ui/icons';

const useStyles = makeStyles({
  groot: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  geral: {
    'margin-top': '30px'
  }
});

function App() {
  const classes = useStyles();
  var [atual, mudarPagina] = React.useState("inicio");
  var [conectado, estaConectado] = React.useState(false);

  const auth = firebase.auth();
  auth.onAuthStateChanged(user => {
    if (user) {
      estaConectado(true);
    } else {
      estaConectado(false);
    }
  })

  function tratarMudanca(evento, novoValor) {
    mudarPagina(novoValor);
  }

  return (
    <Router>
      <div>
        <CssBaseline />
        <Container>
          <Grid container className={classes.geral}>
            <Route exact path="/" component={Login} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/editar" component={EditarPerfil} />
          </Grid>
        </Container>
        {
          conectado ?
            (
              <BottomNavigation value={atual} onChange={tratarMudanca} showLabels className={classes.groot}>
                <BottomNavigationAction component={Link} to="/perfil" value="perfil" label="Perfil" icon={<PersonIcon />} />
                <BottomNavigationAction component={Link} to="/inicio" value="inicio" label="Início" icon={<HomeIcon />} />
                <BottomNavigationAction component={Link} to="/editar" value="editar" label="Editar perfil" icon={<SettingsIcon />} />
              </BottomNavigation>
            ) : null
        }
      </div>
    </Router>
  )
}

export default App;