import React from 'react';
import renderer from 'react-test-renderer';
import JokesList from '../JokesList';

describe('SvgIcon', () => {
  it('renders correctly', () => {
    const toggleFav = jest.fn();
    const favJokes = {};
    const jokes = [];
    const rendered = renderer.create(
      <JokesList
        toggleFav={toggleFav}
        favoritedJokes={favJokes}
        jokesList={jokes}
        isFavoritedList
      />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
