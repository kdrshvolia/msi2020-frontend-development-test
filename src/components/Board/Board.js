import React from 'react';
import PropTypes from 'prop-types';
import SearchJokeForm from '../SearchJokeForm/SearchJokeForm';
import JokesList from '../JokesList/JokesList';
import Header from '../Header/Header';
import { BoardWrapper, Favorites, Search } from './StyledComponents';
import MainLogo from '../MainLogo/MainLogo';

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
  toggleFav,
  favoritedJokes,
}) => {
  return (
    <BoardWrapper>
      <MainLogo text="MSI 2020" />
      <Search>
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
        {jokes.length === 0 ? null : (
          <JokesList
            jokesList={jokes}
            toggleFav={toggleFav}
            favoritedJokes={favoritedJokes}
            isFavoritedList={false}
          />
        )}
      </Search>
      <Favorites>
        {Object.keys(favoritedJokes).length === 0 ? null : (
          <JokesList
            jokesList={Object.values(favoritedJokes)}
            toggleFav={toggleFav}
            isFavoritedList
          />
        )}
      </Favorites>
    </BoardWrapper>
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
  chosenCategory: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  getJoke: PropTypes.func.isRequired,
  jokes: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFav: PropTypes.func.isRequired,
  favoritedJokes: PropTypes.shape({
    id: PropTypes.shape({
      categories: PropTypes.array,
      created_at: PropTypes.string.isRequired,
      icon_url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Board;
