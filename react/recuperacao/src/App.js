import React from 'react';
import Item from './Item';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itens: []
    }
  }

  render() {
    var lista = this.state.itens.map(
      (item, i) => <Item key={i} nome={item} />
    );
    return (
      <div>
        <button onClick={() => {
          var itens2 = this.state.itens;
          itens2.push(`Item ${itens2.length+1}`);
          this.setState({itens: itens2})
        }}>Adicionar</button>
        <ol>{lista}</ol>
      </div>
    );
  }
}

export default App;
