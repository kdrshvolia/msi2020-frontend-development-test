import React from 'react';import PropTypes from 'prop-types';import JokeContainer from '../JokeContainer/JokeContainer';const JokesList = ({ jokesList, toggleFav, favoritedJokes }) => {  return (    <div>      {jokesList.map((joke) => (        <JokeContainer joke={joke} toggleFav={toggleFav} isFavorited={!!favoritedJokes[joke.id]} />      ))}    </div>  );};JokesList.propTypes = {  jokesList: PropTypes.arrayOf(    PropTypes.shape({      categories: PropTypes.array,      created_at: PropTypes.string.isRequired,      icon_url: PropTypes.string.isRequired,      id: PropTypes.string.isRequired,      updated_at: PropTypes.string.isRequired,      url: PropTypes.string.isRequired,      value: PropTypes.string.isRequired,    }),  ).isRequired,  toggleFav: PropTypes.func.isRequired,  favoritedJokes: PropTypes.shape({    id: PropTypes.shape({      categories: PropTypes.array,      created_at: PropTypes.string.isRequired,      icon_url: PropTypes.string.isRequired,      id: PropTypes.string.isRequired,      updated_at: PropTypes.string.isRequired,      url: PropTypes.string.isRequired,      value: PropTypes.string.isRequired,    }),  }).isRequired,};export default JokesList;