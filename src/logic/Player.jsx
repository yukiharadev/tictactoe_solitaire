import Minimax from "tic-tac-toe-minimax";
const { ComputerMove, GameStep } = Minimax;

const huPlayer = "X";
const aiPlayer = "O";
const symbols = { huPlayer, aiPlayer };

const handlePlayerMove = (
  index,
  board,
  turn,
  winner,
  setBoard,
  setWinner,
  setTurn,
  difficulty
) => {
  console.log("difficulty", difficulty);
  if (index === 9) {
    setBoard([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    setWinner(null);
    setTurn(huPlayer);
    return;
  }

  if (
    board[index] !== huPlayer &&
    board[index] !== aiPlayer &&
    !winner &&
    turn === huPlayer
  ) {
    board[index] = huPlayer;
    setBoard([...board]);

    const gameStep = GameStep(board, symbols, difficulty);
    console.log("gameStep", gameStep.winner);
    setBoard([...gameStep.board]);
    if(gameStep.winner){
      return setWinner(gameStep.winner);
    }

    if (!gameStep.winner) {
      setTurn(aiPlayer);
      ComputerMove(board, symbols, difficulty);

      const newGameStep = GameStep(board, symbols, difficulty);
      setBoard([...newGameStep.board]);
      setWinner(newGameStep.winner);

      if (!newGameStep.winner) {
        setTurn(huPlayer);
      }
    }
  }
};

export { handlePlayerMove, huPlayer, aiPlayer, symbols };
