import React from 'react';
import cssStyles from './LocationWidget.module.scss';

const LocationWidget = () => {
  const label = 'Location';
  const selectedLocation = 'Fitzrovia';
  const SelectLocationLabel = 'Change Location';
  const onSelectLocation = () => {
    console.log('Selecting New Location');
  };
  return(
    <>
      <div className={ cssStyles.mainInfo }>
        <span className={ cssStyles.label }>{ label }</span>
        <span className={ cssStyles.selectedLocation }>{ selectedLocation }</span>
      </div>
      <button id="locationUpdate" name="locationUpdate"
              data-testid="location-button" className={ cssStyles.locationSelectionBtn }
              type="button" onClick={ onSelectLocation }>
        { SelectLocationLabel }
      </button>
    </>
  );
};

export default LocationWidget;