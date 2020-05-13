import React from 'react';
import PropTypes from 'prop-types';

const JokeContainer = ({ joke }) => {
  return (
    <div>
      <a href={joke.url}>Link</a>
      <div className="joke-text">{joke.value}</div>
      <div className="category">{joke.categories} </div>
      <div className="last-update" />
    </div>
  );
};

export default JokeContainer;
