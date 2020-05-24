import React from 'react';
import PropTypes from 'prop-types';
import JokeContainer from '../JokeContainer/JokeContainer';
import { List } from './StyledComponents';

const JokesList = ({ jokesList, toggleFav, favoritedJokes, isFavoritedList }) => {
  return (
    <List isFavoritedList={isFavoritedList}>
      {jokesList.reverse().map((joke) => {
        const favorited = favoritedJokes ? !!favoritedJokes[joke.id] : true;
        return (
          <JokeContainer
            joke={joke}
            toggleFav={toggleFav}
            isFavorited={favorited}
            isInFavoritedList={isFavoritedList}
          />
        );
      })}
    </List>
  );
};

JokesList.propTypes = {
  jokesList: PropTypes.arrayOf(
    PropTypes.shape({
      categories: PropTypes.array,
      created_at: PropTypes.string.isRequired,
      icon_url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
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
    }).isRequired,
  }).isRequired,
  isFavoritedList: PropTypes.bool.isRequired,
};

export default JokesList;
