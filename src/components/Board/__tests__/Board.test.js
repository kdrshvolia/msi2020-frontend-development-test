import renderer from 'react-test-renderer';
import React from 'react';
import Board from '../Board';

describe('Board', () => {
  it('Renders correctly', () => {
    const toggleFav = jest.fn();
    const setCategory = jest.fn();
    const getJoke = jest.fn();
    const favoritedJokes = {};
    const options = { a: 'a', b: 'b' };
    const jokes = [];
    const categories = ['a', 'b', 'c'];
    const rendered = renderer.create(
      <Board
        toggleFav={toggleFav}
        favoritedJokes={favoritedJokes}
        setCategory={setCategory}
        getJoke={getJoke}
        jokes={jokes}
        options={options}
        categories={categories}
      />,
    );
    expect(rendered).toMatchSnapshot();
  });
});
