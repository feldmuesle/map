import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import mapKey from "../../config/keys";

function Pointer({ lat, lng }) {
  return <div className="pointer">Hi there!</div>;
}

function Map({ defaultCenter, defaultZoom }) {
  return (
    <div className="map" style={{ height: "250px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapKey }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        <Pointer lat={59.955413} lng={30.337844} />
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  defaultCenter: {
    lat: 47.31284201306256,
    lng: 10.11145268256571,
  },
  defaultZoom: 11,
};

Map.propTypes = {
  defaultCenter: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  defaultZoom: PropTypes.number.isRequired,
};

export default Map;
