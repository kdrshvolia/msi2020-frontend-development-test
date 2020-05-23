import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
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

  it('renders correctly', () => {
    const id = '1';
    const isClicked = jest.fn();
    const children = 'text';
    const rendered = renderer.create(<CategoryItem onClick={isClicked} id={id} isChosen={false}>{children}</CategoryItem>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
