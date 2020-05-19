import renderer from 'react-test-renderer';
import React from 'react';
import { mount } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  it('Button is clicked', () => {
    const text = 'Button';
    const isClicked = jest.fn();
    const wrapper = mount(<Button onClick={isClicked} text={text} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(isClicked).toBeCalledWith();
  });
});
