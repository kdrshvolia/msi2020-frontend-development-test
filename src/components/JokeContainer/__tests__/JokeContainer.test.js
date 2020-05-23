import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import JokeContainer from '../JokeContainer';

const joke = {
  id: '1',
  url: 'url',
  value: 'some value',
  updated_at: 'date',
  icon_url: 'url',
  categories: ['category'],
};
const isClicked = jest.fn();

describe('JokeContainer', () => {
  it('toggles favorite on click', () => {
    const wrapper = mount(<JokeContainer toggleFav={isClicked} joke={joke} />);
    const icon = wrapper.find('svg');
    icon.simulate('click', joke.id);
    expect(isClicked).toBeCalledWith(joke.id);
  });
  it('Renders correctly', () => {
    const rendered = renderer.create(
      <JokeContainer toggleFav={isClicked} joke={joke} isFavorited isInFavoritedList />,
    );
    expect(rendered).toMatchSnapshot();
  });
});
