import { useState } from "react";
import { BOARD_GAME_BUTTON } from "../../config/board.game.config";
import { handlePlayerMove, huPlayer } from "../../logic/Player";
import Difficulty from "../Difficulty";
import BoardItems from "./BoardItems";

const BoardGame = () => {
  const [board, setBoard] = useState(BOARD_GAME_BUTTON);
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(huPlayer);
  const [difficulty, setDifficulty] = useState("Hard");

  const handleCellClick = (index) => {
    handlePlayerMove(
      index,
      board,
      turn,
      winner,
      setBoard,
      setWinner,
      setTurn,
      difficulty
    );
  };

  const handleResetGame = () => {
    handleCellClick(9);
  };

  const isGameStarted = board.some(cell => cell === "X" || cell === "O");
  return (
    <div className="flex flex-col items-center justify-center max-w-3xl min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">TIC TAC TOE</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <BoardItems board={board} handleCellClick={handleCellClick} />
        {winner && (
          <div className="text-2xl font-semibold mb-4 text-center text-gray-700">
            {winner === "draw"
              ? "Hoà"
              : `Người chơi ${winner === huPlayer ? "X" : "O"} thắng`}
          </div>
        )}
        <div>
          <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} disabled = {isGameStarted} />
          <button
            onClick={handleResetGame}
            className="mt-4 sm:mt-0 px-3 py-1 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Chơi lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardGame;
