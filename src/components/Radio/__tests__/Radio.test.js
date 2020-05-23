import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Radio from '../Radio';

const option = 'search';
const isChanged = jest.fn();

describe('Radio', () => {
  it('Radio changes', () => {
    const wrapper = mount(<Radio handleChange={isChanged} option={option} />);
    const radio = wrapper.find('input[type="radio"]');
    radio.simulate('change');
    expect(isChanged).toBeCalledWith(option);
  });
  it('Renders correctly', () => {
    const rendered = renderer.create(<Radio handleChange={isChanged} option={option} />);
    expect(rendered).toMatchSnapshot();
  });
});
