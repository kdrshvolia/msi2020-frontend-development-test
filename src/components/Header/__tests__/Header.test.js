import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Header', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<Header title="title" subtitle="subtitle" />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
