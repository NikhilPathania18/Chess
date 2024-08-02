import { Chessboard } from 'react-chessboard';
import './App.css';
import { Chess } from 'chess.js';
import { useState } from 'react';
import Board from './components/chessboard';
function App() {
  return (
    <>
    <div className="App">
    </div>
    <div style={{width: "400px"}}>
    <Board />

    </div>
    </>
  );
}

export default App;
