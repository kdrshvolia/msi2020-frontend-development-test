import React from 'react';
import { mount } from 'enzyme';
import JokeContainer from '../JokeContainer';

describe('JokeContainer', () => {
  it('toggles favorite on click', () => {
    const joke = {
      id: '1',
      url: 'url',
      value: 'some value',
      updated_at: 'date',
      icon_url: 'url',
      categories: ['category'],
    };
    const isClicked = jest.fn();
    const wrapper = mount(<JokeContainer toggleFav={isClicked} joke={joke} />);
    const icon = wrapper.find('svg');
    icon.simulate('click', joke.id);
    expect(isClicked).toBeCalledWith(joke.id);
  });
});
