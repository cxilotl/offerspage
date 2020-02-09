import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup, wait } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import RestaurantList from './RestaurantList';

import restaurantsResponse from '../../../fixtures/restaurants';

describe('RestaurantList', () => {

  it('Snapshot', () => {
    const component = renderer.create(
      <RestaurantList />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Given a list of restaurant elements, it', () => {
    let serverMock;
    let restaurantsUrl;

    beforeEach(() => {
      serverMock = new MockAdapter(axios);
      restaurantsUrl = /restaurants\.json/i;
      serverMock.onGet(restaurantsUrl).reply(200, restaurantsResponse);
    });

    afterEach(() => {
      serverMock.restore();
      cleanup();
    });

    it('should display the number of restaurants available', async () => {
      const { getByText } = render(
        <RestaurantList />
      );
      await wait(() => {
        const numOfRestaurantElement = getByText(/Restaurants/i);
        expect(numOfRestaurantElement.innerHTML).toEqual('9 Restaurants');
      });
    });

    it('should display a list of restaurants', async () => {
      const { getByTestId } = render(
        <RestaurantList />
      );

      await wait(() => {
        const listOfRestaurants = getByTestId('restaurant-list');
        expect(listOfRestaurants).toBeInTheDocument();
      });
    });

  });

});