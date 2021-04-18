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
  function formatDate(timeStamp) {
    const date = new Date(timeStamp);

    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }

  return (
    <div className={className ? `details ${className}` : 'details'}>
      {name && <h3 className="details__heading">{name}</h3>}
      <Detail label="Address" text={address} icon="map-marker-alt" />
      <Detail label="Website" text={website} icon="home" url={website} />
      <Detail label="Last review" text={lastReview} icon="star" />
      <Detail
        label="Last mentioned"
        text={formatDate(lastMentioned)}
        icon="clock"
      />
    </div>
  );
}

Detail.defaultProps = {
  className: null,
};

Details.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  lastReview: PropTypes.string.isRequired,
  lastMentioned: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Details;
