import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SearchInput from '../SearchInput';

const isChanged = jest.fn();

describe('SearchInput', () => {
  it('Input text is changed', () => {
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

  it('Renders correctly', () => {
    const rendered = renderer.create(
      <SearchInput inputText="abc" onChange={isChanged} placeholder="text" />,
    );
    expect(rendered).toMatchSnapshot();
  });
});
