import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import mapKey from '../../config/keys';
import Pointer from './pointer';
import './map.css';

function Map({ defaultCenter, defaultZoom, pointer, className }) {
  return (
    <div className={className ? `map ${className}` : 'map'}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapKey }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        <Pointer {...pointer} />
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  defaultCenter: {
    lat: 47.31284201306256,
    lng: 12.11145268256571,
  },
  defaultZoom: 3,
  pointer: null,
  className: null,
};

Map.propTypes = {
  defaultCenter: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  defaultZoom: PropTypes.number.isRequired,
  pointer: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  className: PropTypes.string,
};

export default Map;
