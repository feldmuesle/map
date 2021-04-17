import React from 'react';
import PropTypes from 'prop-types';
import './list-item.css';

function ListItem({ data, onClick, selected }) {
  const { id, name, cuisine, availability } = data;

  return (
    <li
      key={id}
      className={`list__item${selected ? ' list__item--selected' : ''}`}
      onClick={() => onClick(id)}
    >
      <span className="item-info__name">{name}</span>
      <span className="item-info__cuisine">{cuisine}</span>
      <span className="item-info__availability">{availability}</span>
    </li>
  );
}

ListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    cuisine: PropTypes.string,
    availability: PropTypes.string,
  }),
};

export default ListItem;
