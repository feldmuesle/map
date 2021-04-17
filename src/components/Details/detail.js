import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './detail.css';

function Detail({ label, text, icon, url }) {
  return (
    <div className="detail">
      {icon && (
        <span className="detail__icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {label && <span className="detail__label">{`${label}: `}</span>}
      {url ? (
        <a className="detail__link" href={url} target="blank">
          {text}
        </a>
      ) : (
        text
      )}
    </div>
  );
}

Detail.defaultProps = {
  label: null,
  icon: null,
  url: null,
};

Detail.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  url: PropTypes.string,
};

export default Detail;