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
        <a
          className="detail__link"
          href={url}
          target="blank"
          rel="noopener noreferrer"
        >
          {text || url}
        </a>
      ) : (
        <span className="detail__text">{text || 'Not available'}</span>
      )}
    </div>
  );
}

Detail.defaultProps = {
  label: null,
  text: null,
  icon: null,
  url: null,
};

Detail.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
};

export default Detail;
