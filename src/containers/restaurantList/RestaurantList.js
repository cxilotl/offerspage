import React, { useEffect, useState } from 'react';
import cssStyles from './RestaurantList.module.scss';
import RestaurantEntry from '../../components/restaurantEntry/RestaurantEntry';
import { useRestaurantsApi } from './useRestaurantsApi';

const generateRestaurantList = (restaurants, selectedTag) => {
  let filteredRestaurants;
  if (typeof selectedTag === 'string' && selectedTag.trim().length > 0) {
    filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.tags ? restaurant.tags.indexOf(selectedTag) !== -1 : false;
    });
  } else {
    filteredRestaurants = restaurants;
  }
  return(
    <>
      {
        filteredRestaurants.map((restaurant) => {
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

const generateTagList = (restaurants) => {
  const tagsList = restaurants.map((restaurant) => {
    return restaurant.tags;
  });
  return tagsList.reduce((flatTagList, tags) => {
    tags.forEach((tag) => {
      const foundItem = flatTagList.find((item) => {
        return item.name === tag;
      });
      if (foundItem) {
        foundItem.num = foundItem.num + 1;
      } else {
        flatTagList.push({
          name: tag,
          num: 1
        });
      }
    });
    return flatTagList;
  }, []);
};

const generateTagListContent = (tagList, handleSelectTag) => {
  return(
    <>
      <li key="viewAll">
        <a onClick={ handleSelectTag } data-tag="" href={ `/view-all` }>
          View All ({ tagList.length })
        </a>
      </li>
      {
        tagList.map((tagItem) => {{
          return(
            <li key={ `${tagItem.name}` }>
              <a onClick={ handleSelectTag } data-tag={ tagItem.name } href={ `/${tagItem.name.toLowerCase()}` }>
                { tagItem.name } ({ tagItem.num })
              </a>
            </li>
          );
        }})
      }
    </>
  );
};

const RestaurantList = () => {
  const [ selectedTag, setSelectedTag ] = useState();
  const onSelectingTag = (e) => {
    e.preventDefault();
    const tagSelected = e.currentTarget.getAttribute('data-tag');
    if (typeof tagSelected === 'string' && tagSelected.trim().length > 0) {
      setSelectedTag(tagSelected);
    } else {
      setSelectedTag();
    }
  };

  const { restaurants } = useRestaurantsApi();
  const restaurantsContent = generateRestaurantList(restaurants, selectedTag);
  const numOfRestaurants = Array.isArray(restaurants) ? restaurants.length : 0;

  const [ tagList, setTagList ] = useState([]);
  useEffect(() => {
    const tagListUpdated = generateTagList(restaurants);
    setTagList(tagListUpdated);
  }, [ restaurants ]);
  const tagListContent = generateTagListContent(tagList, onSelectingTag);

  return(
    <section className={ cssStyles.layout }>
      <p className={ cssStyles.amountInfo }>{ numOfRestaurants } Restaurants</p>
      <ul data-testid="tag-list" className={ cssStyles.tagList }>
        { tagListContent }
      </ul>
      <ul data-testid="restaurant-list" className={ cssStyles.list }>
        { restaurantsContent }
      </ul>
    </section>
  );
};

export default RestaurantList;