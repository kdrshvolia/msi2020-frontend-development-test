import React from 'react';
import renderer from 'react-test-renderer';
import CategoriesList from '../CategoriesList';

describe('CategoriesList', () => {
  it('renders correctly', () => {
    const categories = ['a', 'b'];
    const setCategory = jest.fn();
    const chosenCategory = 'a';
    const rendered = renderer.create(
      <CategoriesList
        categories={categories}
        setCategory={setCategory}
        chosenCategory={chosenCategory}
      />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
