import React from 'react';import JokeContainer from '../JokeContainer/JokeContainer';const FavoritedJokesList = ({ jokesList }) => {  return (    <aside>      {jokesList.map((joke) => (        <JokeContainer joke={joke} />      ))}    </aside>  );};export default FavoritedJokesList;