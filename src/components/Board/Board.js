import React from 'react';
import PropTypes from 'prop-types';
import SearchJokeForm from '../SearchJokeForm/SearchJokeForm';

const Board = ({ options, setType, setCategory, chosenOption, chosenCategory, getJoke, joke }) => {
  return (
    <SearchJokeForm
      options={options}
      setType={setType}
      setCategory={setCategory}
      chosenOption={chosenOption}
      chosenCategory={chosenCategory}
      getJoke={getJoke}
      joke={joke}
    />
  );
};

Board.propTypes = {
  options: PropTypes.shape({
    random: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  setType: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  chosenOption: PropTypes.string.isRequired,
  chosenCategory: PropTypes.string,
  getJoke: PropTypes.func.isRequired,
  joke: PropTypes.string.isRequired,
};

export default Board;
