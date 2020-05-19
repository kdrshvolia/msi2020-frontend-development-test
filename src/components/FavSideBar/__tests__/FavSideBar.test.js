import React from 'react';
import { mount } from 'enzyme';
import FavSideBar from '../FavSideBar';

describe('FavSideBar', () => {
  it('set opened on click', () => {
    const isClicked = jest.fn();
    const favorites = {
      '1': {
        id: '1',
        url: 'url',
        value: 'some value',
        updated_at: 'date',
        icon_url: 'url',
        categories: ['category'],
      },
    };
    const wrapper = mount(<FavSideBar setOpened={isClicked} favoritedJokes={favorites} />);
    const img = wrapper.find('img.icon');
    img.simulate('click');
    expect(isClicked).toBeCalledWith();
  });
});
