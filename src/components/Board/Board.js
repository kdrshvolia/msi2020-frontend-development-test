import React from 'react';
import PropTypes from 'prop-types';
import SearchJokeForm from '../SearchJokeForm/SearchJokeForm';
import JokesList from '../JokesList/JokesList';
import Header from '../Header/Header';
import { BoardWrapper, Favorites, FavoritesList, Search, SideBarOverlay } from './StyledComponents';
import MainLogo from '../MainLogo/MainLogo';
import FavoritesHeader from '../FavoritesHeader/FavoritesHeader';
import FavSideBar from '../FavSideBar/FavSideBar';
import { SideBarHeader, HamburgerIcon } from '../FavSideBar/StyledComponents';
import CrossBtn from '../../images/favorites-cross-btn.svg';
import BurgerBtn from '../../images/favorites-burger-btn.svg';

const Board = ({
  setInputText,
  inputText,
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
  isSideBarOpened,
  setOpened,
}) => {
  const setOpen = () => {
    setOpened();
  };
  return (
    <BoardWrapper>
      <Search>
        <MainLogo text="MSI 2020" />
        <Header title="Hey!" subtitle="Let’s try to find a joke for you:" />
        <SearchJokeForm
          setInputText={setInputText}
          inputText={inputText}
          options={options}
          setType={setType}
          chosenOption={chosenOption}
          chosenCategory={chosenCategory}
          getJoke={getJoke}
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
      <SideBarOverlay isSideBarOpened={isSideBarOpened} />
      <Favorites>
        <FavoritesHeader>Favourite</FavoritesHeader>
        <FavoritesList>
          {Object.keys(favoritedJokes).length === 0 ? null : (
            <JokesList
              jokesList={Object.values(favoritedJokes)}
              toggleFav={toggleFav}
              isFavoritedList
            />
          )}
        </FavoritesList>
      </Favorites>
      <SideBarHeader>
        {' '}
        <HamburgerIcon>
          <img
            className="icon"
            src={isSideBarOpened ? CrossBtn : BurgerBtn}
            alt=""
            onClick={setOpen}
          />
        </HamburgerIcon>
        <FavoritesHeader>Favourite</FavoritesHeader>
      </SideBarHeader>
      <Favorites isSideBarOpened={isSideBarOpened}>
        <FavSideBar
          favoritedJokes={favoritedJokes}
          toggleFav={toggleFav}
          isFavoritedList
          isSideBarOpened={isSideBarOpened}
          setOpened={setOpened}
        />
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
  inputText: PropTypes.string.isRequired,
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
  isSideBarOpened: PropTypes.bool.isRequired,
  setOpened: PropTypes.func.isRequired,
};

export default Board;
