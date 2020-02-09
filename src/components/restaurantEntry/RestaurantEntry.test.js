import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RestaurantEntry from './RestaurantEntry';

describe('RestaurantEntry', () => {
  const restaurantInfo = {
    id: '63460',
    name: 'Burrito Kitchen',
    image: '/images/image-container-01.png',
    url: 'https://deliveroo.co.uk/menu/london/bank/burrito-kitchen-cheapside',
    price: 2,
    tags: [
      'Mexican',
      'Burritos'
    ]
  };

  it('Snapshot', () => {
    const component = renderer.create(
      <RestaurantEntry
        id={ `restaurant-${ restaurantInfo.id }` }
        name={ restaurantInfo.name }
        image={ restaurantInfo.image }
        url={ restaurantInfo.url }
        price={ restaurantInfo.price }
        tags={ restaurantInfo.tags }
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Given some Restaurant information, it', () => {

    it('Should render the name, the description, and the price range of the restaurant', () => {
      const { getByText, getByAltText } = render(
        <RestaurantEntry
          id={ `restaurant-${ restaurantInfo.id }` }
          name={ restaurantInfo.name }
          image={ restaurantInfo.image }
          url={ restaurantInfo.url }
          price={ restaurantInfo.price }
          tags={ restaurantInfo.tags }
        />
      );

      const image = getByAltText(/Burrito Kitchen/i);
      expect(image).toBeInTheDocument();
      expect(image.src).toMatch(restaurantInfo.image);

      const name = getByText(/Burrito Kitchen/i);
      expect(name).toBeInTheDocument();

      const description = getByText(/Mexican/i);
      expect(description.textContent).toBe(`Mexican . Burritos`);

      const priceLevel = getByText(/££/i);
      expect(priceLevel).toBeInTheDocument();
    });
  });
});