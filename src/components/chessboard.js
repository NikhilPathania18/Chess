import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

const Board = () => {

    const [game, setGame] = useState(new Chess())

    const [boardOrientation, setBoardOrientation] = useState('white')

    const makeMove = (move) => {
        try {
            if(game.isGameOver() || game.isDraw())  return false;
            const gameCopy = new Chess(game.fen());
            
            gameCopy.move(move);

            setGame(gameCopy);
            return true;
        } catch (error) {
            console.log('Invalid move')
            console.log(error)
        }
    }

    const onDrop = (source, target) => {
        try {
            const move = {
                from: source,
                to: target,
                promotion:  'q'
            }

            if(!makeMove(move))    {
                console.log('Invalid move')
                return;
            }

            const turn = game.turn()
            if(turn === 'w')    setBoardOrientation('black')
            else    setBoardOrientation('white')
        } catch (error) {
            console.log(error)
        }
    }

    const showBoard = () => {
        console.log(game.ascii());
    }

    const showFen = () => {
        console.log(game.fen());
    }

    const onPromotionPieceSelect = (piece, from, to) => {
        const move = {
            source: from,
            target: to,
            promotion: piece.charAt(1).toLowerCase()
        }

        makeMove(move);
        console.log('promotion', piece, from , to)
        return true;
    }


  return (
    <div>
      <button onClick={()=>{showBoard()}}> Show board </button>
      <button onClick={()=>{showFen()}}> Show FEN </button>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} boardOrientation={boardOrientation} promotionDialogVariant="vertical" onPromotionPieceSelect={onPromotionPieceSelect}/>
    </div>
  );
};

export default Board;
