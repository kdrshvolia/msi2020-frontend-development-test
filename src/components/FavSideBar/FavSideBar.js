import React from 'react';
import PropTypes from 'prop-types';
import { FavoritesList } from '../Board/StyledComponents';
import JokesList from '../JokesList/JokesList';

const FavSideBar = ({ favoritedJokes, toggleFav, isFavoritedList, isSideBarOpened, setOpened }) => {
  return (
    <aside>
      <FavoritesList isSideBarOpened={isSideBarOpened}>
        {Object.keys(favoritedJokes).length === 0 ? null : (
          <JokesList
            jokesList={Object.values(favoritedJokes)}
            toggleFav={toggleFav}
            isFavoritedList={isFavoritedList}
          />
        )}
      </FavoritesList>
    </aside>
  );
};

FavSideBar.propTypes = {
  toggleFav: PropTypes.func.isRequired,
  isSideBarOpened: PropTypes.bool.isRequired,
  setOpened: PropTypes.func.isRequired,
  isFavoritedList: PropTypes.bool.isRequired,
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

export default FavSideBar;
