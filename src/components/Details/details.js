import React from 'react';
import PropTypes from 'prop-types';
import Detail from './detail';

function Details({
  name,
  address,
  website,
  lastReview,
  lastMentioned,
  className,
}) {
  return (
    <div className={className ? `details ${className}` : 'details'}>
      {name && <h3 className="details__heading">{name}</h3>}
      <Detail label="Address" text={address} icon="map-marker-alt" />
      <Detail label="Website" text={website} icon="home" url={website} />
      <Detail label="Last review" text={lastReview} icon="star" />
      <Detail label="Opening hours" text={lastMentioned} icon="clock" />
    </div>
  );
}

Detail.defaultProps = {
  className: null,
};

Details.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Details;
