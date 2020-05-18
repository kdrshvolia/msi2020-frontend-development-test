import React, { Component } from 'react';
import { Favorites, FavoritesBtn, FavoritesList } from '../Board/StyledComponents';
import BurgerBtn from '../../images/favorites-burger-btn.svg';
import CrossBtn from '../../images/favorites-cross-btn.svg';
import FavoritesHeader from '../FavoritesHeader/FavoritesHeader';
import JokesList from '../JokesList/JokesList';
import { HamburgerIcon, Header } from './StyledComponents'

const FavSideBar = ({ favoritedJokes, toggleFav, isFavoritedList, isSideBarOpened, setOpened }) => {
  const setOpen = () => {
    setOpened();
  };
  return (
    <aside>
      <Header>
        {' '}
        <HamburgerIcon>
          <img src={isSideBarOpened ? CrossBtn : BurgerBtn} alt="" onClick={setOpen} />
        </HamburgerIcon>
        <FavoritesHeader title="Favourite" />
      </Header>
      <FavoritesList isSideBarOpened={isSideBarOpened}>
        {Object.keys(favoritedJokes).length === 0 ? null : (
          <JokesList
            jokesList={Object.values(favoritedJokes)}
            toggleFav={toggleFav}
            isFavoritedList
          />
        )}
      </FavoritesList>
    </aside>
  );
};

export default FavSideBar;
