import React from 'react';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

class Login extends React.Component {
  // quando a página carregar
  componentDidMount() {
    let uiConfig = {
      signInSuccessUrl: '/inicio',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    }

    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebase-auth-container', uiConfig);
  }

  render() {
    return (
      <div id='firebase-auth-container'></div>
    );
  }
}

export default Login;