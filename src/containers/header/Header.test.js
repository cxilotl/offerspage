import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {

  it('Snapshot', () => {
    const component = renderer.create(
      <Header />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});