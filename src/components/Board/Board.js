import React from 'react';
import PropTypes from 'prop-types';
import SearchJokeForm from '../SearchJokeForm/SearchJokeForm';
import JokeContainer from '../JokeContainer/JokeContainer';
import JokesList from '../JokesList/JokesList';
import Header from '../Header/Header';

const Board = ({
  setInputText,
  options,
  setType,
  setCategory,
  chosenOption,
  chosenCategory,
  getJoke,
  categories,
  jokes,
  addToFav
}) => {
  return (
    <>
      <Header title="Hey!" subtitle="Let’s try to find a joke for you:" />
      <SearchJokeForm
        setInputText={setInputText}
        options={options}
        setType={setType}
        chosenOption={chosenOption}
        chosenCategory={chosenCategory}
        getJoke={getJoke}
        jokes={jokes}
        categories={categories}
        setCategory={setCategory}
      />
      {jokes.length === 0 ? null : <JokesList jokesList={jokes} addToFav={addToFav} />}
    </>
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
  setInputText: PropTypes.func.isRequired,
  getJoke: PropTypes.func.isRequired,
  jokes: PropTypes.string.isRequired,
};

export default Board;
