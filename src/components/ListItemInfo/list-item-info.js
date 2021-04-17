import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './list-item-info.css';

function ListItemInfo({ data }) {
  const { name, cuisine, availability } = data;

  function translateAvailability(state) {
    switch (state) {
      case 'available':
        return 'open for reservations';
      case 'fullyBooked':
        return 'fully booked';
      case 'fewTablesLeft':
        return 'only few tables left';
      case 'closed':
        return 'out of service';
      default:
        return '';
    }
  }

  function getClassName(state) {
    const defaultClassName = 'list-item-info';

    return state === 'fullyBooked' || state === 'closed'
      ? `${defaultClassName} ${defaultClassName}--passive`
      : defaultClassName;
  }

  return (
    <div className={getClassName(availability)}>
      <span className="list-item-info__name">{name}</span>
      <span className="list-item-info__cuisine">
        <FontAwesomeIcon className="fa-icon" icon="utensils" />
        {cuisine}
      </span>
      <span className="list-item-info__availability">
        {translateAvailability(availability)}
      </span>
    </div>
  );
}

ListItemInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    cuisine: PropTypes.string,
    availability: PropTypes.string,
  }),
};

export default ListItemInfo;
