import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBsx6TX_v3jEC3wM9SNezwKJ30amu3aHlQ",
  authDomain: "ouvidoriaifpb.firebaseapp.com",
  databaseURL: "https://ouvidoriaifpb.firebaseio.com",
  projectId: "ouvidoriaifpb",
  storageBucket: "ouvidoriaifpb.appspot.com",
  messagingSenderId: "170096774197",
  appId: "1:170096774197:web:bc48ccfc1ac7ad61"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();