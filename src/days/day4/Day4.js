import React from 'react';
import './day4_Tutorial.css';

function Square(props) {
  return (
    <button
      className="square"
      onClick={() => props.squareClick()}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: '',
    };
  }

  checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  checkFullBox(items) {
    var isFull = true;
    console.log('test ==== ', items);
    items.forEach((item) => {
      if (item === null) {
        isFull = false;
      }
    })
    return isFull;
  }

  playAgain() {
    this.setState({
      squares: Array(9).fill(null),
      winner: '',
      xIsNext: true
    })
  }

  handleClick(i) {
    const items = this.state.squares.slice(); //creates a copy and doesn't modify 
    if (this.state.xIsNext === true) {
      items[i] = 'X';
      this.setState({ xIsNext: false });
    }
    else {
      items[i] = 'O';
      this.setState({ xIsNext: true });
    }
    this.setState({ squares: items });
    let isThereWinner = this.checkWinner(items);
    if (isThereWinner) {
      this.setState({ winner: `The winner is ${isThereWinner}` });
    }
    if (this.checkFullBox(items) && !isThereWinner) {
      this.setState({ winner: 'It is a tie' });
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        squareClick={() => this.handleClick(i)} />
    );
  }

  render() {
    const player = this.state.xIsNext ? 'X' : 'O';
    const status = `Next player: ${player}`;
    let win = `Result: ${this.state.winner}`;
    return (
      <div>
        <div className="display">
          <div className="status">{status}</div>
        </div>
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
        <div className="winner">{win}</div>
        <button className="play-again" onClick={() => this.playAgain()}>Play Again</button>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;