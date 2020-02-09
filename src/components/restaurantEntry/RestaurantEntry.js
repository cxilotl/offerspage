import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from './RestaurantEntry.module.scss';

const priceLevels = [
  '£',
  '££',
  '£££'
];

const RestaurantEntry = ({ id, name, image, url, price, tags }) => {
  const delimiter = ' . ';
  const tagsDescription = Array.isArray(tags) ? tags.join(delimiter) : '';
  const priceLevel = priceLevels[price - 1];
  return(
    <div id={ id } className={ cssStyles.layout }>
      <a href={ url } className={ cssStyles.link } target="_blank" rel="noopener noreferrer">
        <img src={ image } alt={ `${ name }` } className={ cssStyles.image }/>
      </a>
      <h3 className={ cssStyles.title }>{ name }</h3>
      <p className={ cssStyles.description }><span>{ tagsDescription }</span> . <span>{ priceLevel }</span></p>
    </div>
  );
};

RestaurantEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default RestaurantEntry;