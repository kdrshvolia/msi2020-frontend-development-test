import React from 'react';
import { mount } from 'enzyme';
import CategoryItem from '../CategoryItem';

describe('CategoryItem', () => {
  it('setItem on click', () => {
    const isClicked = jest.fn();
    const id = '1';
    const wrapper = mount(<CategoryItem onClick={isClicked} id={id} />);
    const item = wrapper.find('div');
    item.simulate('click');
    expect(isClicked).toBeCalledWith(id);
  });
});
