import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import LocationWidget from './LocationWidget';

describe('LocationWidget', () => {

  it('Snapshot', () => {
    const component = renderer.create(
      <LocationWidget />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Given an LocationWidget element, it', () => {
    afterEach(cleanup);

    it('should include a label', () => {
      const { getByText } = render(
        <LocationWidget />
      );
      const label = getByText('Location');
      expect(label).toBeInTheDocument();
    });

    it('should include a selected location', () => {
      const { getByText } = render(
        <LocationWidget />
      );
      const selectedLocation = getByText(/Fitzrovia/i);
      expect(selectedLocation).toBeInTheDocument();
    });

    it('should handle a button for selecting a new location', () => {
      const { getByTestId } = render(
        <LocationWidget />
      );
      const locationButton = getByTestId('location-button');
      expect(locationButton).toBeInTheDocument();
      expect(locationButton.innerHTML).toBe('Change Location');
    });
  });

});