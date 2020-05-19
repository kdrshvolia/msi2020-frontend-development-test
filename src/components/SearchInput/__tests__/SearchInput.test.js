import React from 'react';
import { mount } from 'enzyme';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  it('Input text is changed', () => {
    const isChanged = jest.fn();
    const wrapper = mount(<SearchInput onChange={isChanged} />);
    const input = wrapper.find('input');
    const event = {
      target: {
        value: 'some text',
      },
    };
    input.simulate('change', event);
    expect(isChanged).toBeCalledWith(event.target.value);
  });
});
