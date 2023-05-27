import React, { createRef, useState } from "react";
import ReactDOM from "react-dom";

import Entrada from './Entrada';

function App() {
  return (
    <div>
      <Entrada />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
