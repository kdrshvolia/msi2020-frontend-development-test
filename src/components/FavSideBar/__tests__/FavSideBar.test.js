import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import FavSideBar from '../FavSideBar';

const isClicked = jest.fn();
const toggleFav = jest.fn();
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

describe('FavSideBar', () => {
  it('set opened on click', () => {
    const wrapper = mount(<FavSideBar setOpened={isClicked} favoritedJokes={favorites} />);
    const img = wrapper.find('img');
    img.simulate('click');
    expect(isClicked).toBeCalledWith();
  });

  it('renders correctly', () => {
    const favJokes = {};
    const rendered = renderer.create(
      <FavSideBar
        isSideBarOpened
        setOpened={isClicked}
        isFavoritedList
        favoritedJokes={favJokes}
        toggleFav={toggleFav}
      />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
