import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup, fireEvent } from '@testing-library/react';
import AccountButton from './accountButton';

describe('AccountButton', () => {
  const user = 'Jane Smith';
  const handleClick = jest.fn();

  it('Snapshot', () => {
    const component = renderer.create(
      <AccountButton
        userName={ user }
        onCLick={ handleClick }
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Given an AccountButton element, it', () => {
    afterEach(cleanup);

    it('should include a user icon', () => {
      const { getByAltText } = render(
        <AccountButton
          userName={ user }
          onCLick={ handleClick }
        />
      );
      const userIcon = getByAltText('User icon');
      expect(userIcon).toBeInTheDocument();
    });

    it('should include the user name', () => {
      const { getByText } = render(
        <AccountButton
          userName={ user }
          onCLick={ handleClick }
        />
      );
      const label = getByText(/Jane Smith/i);
      expect(label).toBeInTheDocument();
    });

    it('should handle a ussr clicking on the icon', () => {
      const { getByTestId } = render(
        <AccountButton
          userName={ user }
          onCLick={ handleClick }
        />
      );
      const accountBtn = getByTestId('account-button');
      fireEvent.click(accountBtn);
      expect(handleClick).toHaveBeenCalled();
    });
  });

});