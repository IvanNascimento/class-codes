import React from 'react';

import Login from './Login';
import Inicio from './Inicio';
import Perfil from './Perfil';
import Mensagem from './Mensagem';
import Cadastro from './Cadastro'

import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  CssBaseline,
  Container,
  Grid,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';

import {
  Home as HomeIcon,
  Person as PersonIcon,
  PowerSettingsNew as Off, // Testar
  Settings as SettingsIcon
} from '@material-ui/icons';

function App() {

  var [atual, mudarPagina] = React.useState("inicio");
  var [conectado, estaConectado] = React.useState(false);

  let Desconectar = function () {
    firebase.auth().signOut().then(function () {
      console.log("Desconectado");
    });
  }

  const auth = firebase.auth();
  auth.onAuthStateChanged(user => {
    if (user) {
      estaConectado(true);
    } else {
      estaConectado(false);
    }
  })

  function tratarMudanca(evento, novoValor) {
    if (novoValor === 'sair') {
      Desconectar();
    }
    mudarPagina(novoValor);
  }

  return (
    <Router>
      <div>
        <CssBaseline />
        <Container>
          <Grid container >
            <Route exact path="/" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/mensagem/:mensagemId" component={Mensagem} />
          </Grid>
        </Container>
        {
          conectado ?
            (
              <BottomNavigation value={atual} onChange={tratarMudanca} showLabels>
                <BottomNavigationAction component={Link} to="/perfil" value="perfil" label="Perfil" icon={<PersonIcon />} />
                <BottomNavigationAction component={Link} to="/inicio" value="inicio" label="Início" icon={<HomeIcon />} />
                <BottomNavigationAction component={Link} to="/editar" value="editar" label="Editar perfil" icon={<SettingsIcon />} />
                <BottomNavigationAction component={Link} to='/' value="sair" label="Sair" icon={<Off />} />
              </BottomNavigation>
            ) : null
        }
      </div>
    </Router>
  );
}

export default App;