import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AccountButton from './accountButton';

describe('AccountButton', () => {

  it('Snapshot', () => {
    const component = renderer.create(
      <AccountButton />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});