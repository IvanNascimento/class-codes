import React, { createRef, useState } from "react";
import Item from './Item';

class Entrada extends React.Component {
  constructor(props) {
    super(props);
    this.conteudo = createRef()
    // this.conteudo = React.createRef()
    this.state = {
      lista: []
    }
  }

  adicionar() {
    let novo = this.conteudo.current.value;
    if(novo) {
      // console.log("Adicionar", novo);
      let copia = [...this.state.lista];
      copia.push(novo);
      this.setState({lista: copia})
      this.conteudo.current.value = "";
    }
  }
  remover(i) {
    // console.log("Remover", i);
    let copia = [...this.state.lista];
    copia.splice(copia.indexOf(i),1);
    this.setState({lista: copia})
  }
  render() {
    let copia = [...this.state.lista];
    let lista = copia.map((i, key) => (
      <Item key={key} conteudo={i} onclick={() => this.remover(i)}/>
    ))
    return (
      <div>
        <div>
          <input ref={this.conteudo} type="text"></input>
          <button type="button" onClick={() => this.adicionar()}>Adicionar</button>
        </div>
        <div>
          <ul> {lista} </ul>
        </div>
      </div>
    );
  }
}

export default Entrada;