import { useState, useEffect } from 'react';
import axios from 'axios';

const useRestaurantsApi = () => {
  const [ restaurants, setRestaurants ] = useState([]);

  useEffect(() => {
    const retrieveRestaurants = async () => {
      try {
        const restaurantsResponse = await axios.get('restaurants.json');
        const restaurantList = restaurantsResponse.data.restaurants;
        setRestaurants(restaurantList);
      } catch(err) {
        console.log(err); // eslint-disable-line no-console
      }
    };

    retrieveRestaurants();
  }, []);

  return { restaurants };
};

export { useRestaurantsApi };