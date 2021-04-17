import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Pointer({ lat, lng }) {
  return (
    <div className="pointer">
      <FontAwesomeIcon icon="map-marker-alt" />
    </div>
  );
}

Pointer.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default Pointer;
