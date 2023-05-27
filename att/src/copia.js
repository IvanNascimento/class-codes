import React, { createRef, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  var titulo = createRef();
  var [lista, setLista] = useState([]);

  function adicionar() {
    if (titulo.current.value) {
      var novo = titulo.current.value;
      var copia = [...lista];
      if (copia.indexOf(novo) === -1) {
        copia.push(novo);
        setLista(copia);
        titulo.current.value = "";
      }
    }
  }

  var showLista = lista.map(i => (
    <li key={i}>
      {i}{" "}
      <button
        onClick={() => {
          var copia = [...lista];
          copia.splice(copia.indexOf(i), 1);
          setLista(copia);
        }}
      >
        X
      </button>
    </li>
  ));

  return (
    <div>
      <input ref={titulo} />
      <button onClick={adicionar}>Ok</button>
      <ul>{showLista}</ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
