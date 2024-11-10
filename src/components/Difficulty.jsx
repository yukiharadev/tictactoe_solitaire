import PropTypes from 'prop-types';

const Difficulty = ({ difficulty, setDifficulty, disabled }) => {



    return (
        <div className="flex items-center mb-4">
        <span className="mr-2">Độ khó:</span>
        <select
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
            className="border-2 border-gray-700 text-xl font-bold"
            disabled={disabled}
        >
            <option value="Easy">Dễ</option>
            <option value="Normal">Trung bình</option>
            <option value="Hard">Khó</option>
        </select>
        </div>
    );

};
Difficulty.propTypes = {
    difficulty: PropTypes.string.isRequired,
    setDifficulty: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default Difficulty;
