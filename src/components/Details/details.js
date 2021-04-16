import React from "react";
import PropTypes from "prop-types";

function Details({ data }) {
  const { name, address, website, lastReview, lastMentioned } = data;
  return (
    <div className="details">
      <h3 className="details__heading">Details:</h3>
      <p>{address}</p>
      <p>{website}</p>
      <p>
        {lastReview} / {lastMentioned}
      </p>
    </div>
  );
}

Details.propTypes = {
  data: PropTypes.object,
};

export default Details;
