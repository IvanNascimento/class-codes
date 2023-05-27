import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAYa74nQl9d_Ssi7GR6gpP349NmTb7eQF4",
  authDomain: "iflirt-c805f.firebaseapp.com",
  databaseURL: "https://iflirt-c805f.firebaseio.com",
  projectId: "iflirt-c805f",
  storageBucket: "iflirt-c805f.appspot.com",
  messagingSenderId: "862829868524",
  appId: "1:862829868524:web:48f31d19bc43e383"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('groot'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();