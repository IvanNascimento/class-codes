import React from 'react';
import Square from './Square'

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    let squares = this.state.squares.slice();
    if(squares[i] !== null && !this.hasWinner()) {
      // Evitar de sobre escrever
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    if(this.hasWinner()) {
      return;
    }
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    });
  }

  hasWinner() {
    let pattern = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    let board = this.state.squares;

    for (let i = 0; i < pattern.length;i++) {
      let atual = pattern[i];
      let e1 = atual[0],
          e2 = atual[1],
          e3 = atual[2];
      let win = (board[e1] === board[e2] && board[e2] === board[e3] && board[e3] !== null);

      if(win) {
        // Teve vencedor
        return true;
      }
    }
    // Não teve vencedor
    return false;
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  }

  render() {
    let status = this.state.xIsNext ? "Próximo: X" : "Próximo: O";

    return (
      <div>
        {(this.hasWinner()) ? 
        (<h1>{this.state.xIsNext ? "O" : "X"} venceu!</h1>) : 
        (<div className="status"> { status } </div>)}
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;