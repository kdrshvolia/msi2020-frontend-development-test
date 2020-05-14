import React from 'react';
import PropTypes from 'prop-types';
import { calculateTimeDifference } from '../../util';
import { JokeText, JokeWrapper, UpdateInfo } from './StyledComponents';

const JokeContainer = ({ joke }) => {
  return (
    <JokeWrapper>
      <div>
        <div className="logo" />
        <a href={joke.url}>{joke.id}</a>
        <JokeText className="joke-text">{joke.value}</JokeText>
        <div className="category">{joke.categories} </div>
        <UpdateInfo className="last-update">
          Last update: {calculateTimeDifference(Date.parse(joke.updated_at), new Date())} hours ago.
        </UpdateInfo>
      </div>
    </JokeWrapper>
  );
};

export default JokeContainer;
