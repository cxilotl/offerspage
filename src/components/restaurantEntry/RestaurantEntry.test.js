import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RestaurantEntry from './RestaurantEntry';

describe('RestaurantEntry', () => {
  const restaurantInfo = {
    name: 'Benito\'s Hat',
    description: `Mexican . Burritos`,
    priceRange: '£'
  };

  it('Snapshot', () => {
    const component = renderer.create(
      <RestaurantEntry
        name={ restaurantInfo.name }
        description={ restaurantInfo.description }
        priceRange={ restaurantInfo.priceRange }
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Given some Restaurant information, it', () => {

    it('Should render the name, the description, and the price range of the restaurant', () => {
      const { getByText } = render(
        <RestaurantEntry
          name={ restaurantInfo.name }
          description={ restaurantInfo.description }
          priceRange={ restaurantInfo.priceRange }
        />
      );

      const name = getByText(/Benito's Hat/i);
      expect(name).toBeInTheDocument();

      const description = getByText(/Mexican/i);
      expect(description.textContent).toBe(`Mexican . Burritos`);

      const priceRange = getByText(/£/i);
      expect(priceRange).toBeInTheDocument();
    });
  });
});