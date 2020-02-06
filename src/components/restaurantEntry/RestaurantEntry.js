import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from './RestaurantEntry.module.scss';

const RestaurantEntry = ({ name, description, priceRange }) => {
  return(
    <div className={ cssStyles.layout }>
      <h3>{ name }</h3>
      <p><span>{ description }</span> . <span>{ priceRange }</span></p>
    </div>
  );
};

RestaurantEntry.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  priceRange: PropTypes.string
};

export default RestaurantEntry;