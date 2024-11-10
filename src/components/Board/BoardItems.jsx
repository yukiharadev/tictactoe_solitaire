
import { huPlayer, aiPlayer } from "../../logic/Player";
import PropTypes from 'prop-types';


const BoardItems = ({ board, handleCellClick }) => (
    <div className="grid grid-cols-3 gap-2 mb-4">
      {board.map((cell, index) => (
        <button
          key={index}
          onClick={() => handleCellClick(index)}
          className="w-16 h-16 border-2 border-gray-700 text-xl font-bold flex items-center justify-center bg-white text-gray-700 disabled:bg-gray-300 disabled:text-gray-500"
          disabled={cell === huPlayer || cell === aiPlayer}
        >
          {cell === huPlayer ? 'X' : cell === aiPlayer ? 'O' : ''}
        </button>
      ))}
    </div>
  );
  BoardItems.propTypes = {
    board: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
    handleCellClick: PropTypes.func.isRequired,
  };
  
  export default BoardItems;
  