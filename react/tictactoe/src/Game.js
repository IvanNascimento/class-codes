import React from 'react';
import Board from './Board';

class Game extends React.Component {
  render() {
    return (
      <div>
        <h1>Jogo da Velha</h1>
        <Board/>
      </div>
    );
  }
}

export default Game;