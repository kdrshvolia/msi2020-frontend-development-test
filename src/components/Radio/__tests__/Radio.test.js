import React from 'react';
import { mount } from 'enzyme';
import Radio from '../Radio';

describe('Radio', () => {
  it('Radio changes', () => {
    const option = 'search';
    const isChanged = jest.fn();
    const wrapper = mount(<Radio handleChange={isChanged} option={option} />);
    const radio = wrapper.find('input[type="radio"]');
    radio.simulate('change');
    expect(isChanged).toBeCalledWith(option);
  });
});
