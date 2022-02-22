import "./App.css";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const O_TEXT = "0";
  const X_TEXT = "X";
  useEffect(() => {
    checkWin();
    checkIfTie();
  }, [board]);

  useEffect(() => {
      if (checkWin.foundWinningPattern == true) {
        const currentPlayer = currentPlayerFromState();
        alert(`Game Finished! Winning Player: ${currentPlayer}`);
        restartGame();
      }
     else if (checkIfTie.filled == "true") {
      alert(`Game Finished! Winning Player: none`);
      restartGame();
    }
  });

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          const currentPlayer = currentPlayerFromState();
          return currentPlayer;
        }

        return val;
      })
    );
  };

  const currentPlayerFromState = (board) => {
    if (board !== undefined) {
      const numXs = board.filter((b) => b === X_TEXT).length;
      const numOs = board.filter((b) => b === O_TEXT).length;
      return numXs < numOs ? X_TEXT : O_TEXT;
    }
  };
  const checkWin = () => {
    const currentPlayer = currentPlayerFromState();
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        return true;
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
