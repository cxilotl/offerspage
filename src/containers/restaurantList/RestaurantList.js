import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cssStyles from './RestaurantList.module.scss';
import RestaurantEntry from '../../components/restaurantEntry/RestaurantEntry';

const getRestaurants = async () => {
  let restaurantsPerLocation = [];
  try {
    const restaurantsResponse = await axios.get('restaurants.json');
    restaurantsPerLocation = restaurantsResponse.data.restaurants;
  } catch(err) {
    console.log(err); // eslint-disable-line no-console
  }
  return restaurantsPerLocation;
};

const generateRestaurantList = (restaurants) => {
  return(
    <>
      {
        restaurants.map((restaurant) => {
          const keyId = `restaurant-${restaurant.id}`;
          return(
            <li key={ keyId } className={ cssStyles.item }>
              <RestaurantEntry
                id={ keyId }
                name={ restaurant.name }
                image={ restaurant.image }
                url={ restaurant.url }
                price={ restaurant.price }
                tags={ restaurant.tags }
              />
            </li>
          );
        })
      }
    </>
  );
};

const RestaurantList = () => {
  const [ restaurants, setRestaurants ] = useState([]);

  useEffect(() => {
    const retrieveRestaurants = async () => {
      try {
        const restaurantList = await getRestaurants();
        setRestaurants(restaurantList);
      } catch(err) {
        console.log(err); // eslint-disable-line no-console
      }
    };
    retrieveRestaurants();
  }, []);

  const restaurantsContent = generateRestaurantList(restaurants);
  const numOfRestaurants = Array.isArray(restaurants) ? restaurants.length : 0;
  return(
    <section className={ cssStyles.layout }>
      <p className={ cssStyles.amountInfo }>{ numOfRestaurants } Restaurants</p>
      <ul data-testid="restaurant-list" className={ cssStyles.list }>
        { restaurantsContent }
      </ul>
    </section>
  );
};

export default RestaurantList;