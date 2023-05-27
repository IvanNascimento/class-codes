import React, { createRef, useState } from "react";

class Item extends React.Component {
  render() {
    // console.log("Item", this.props.conteudo);
    return (
      <li>
        {this.props.conteudo + "    "}
        <button onClick={() => this.props.onclick()}>X</button>
      </li>
    );
  }
}

export default Item;