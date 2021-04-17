import React from 'react';
import PropTypes from 'prop-types';
import './list-item.css';

function ListItem({ data, onClick, selected }) {
  const { id, name, cuisine, availability } = data;

  return (
    <li
      key={id}
      className={`list-item${selected ? ' list-item--selected' : ''}`}
      onClick={() => onClick(id)}
    >
      <div className="list-item__info">
        <span className="item-info__name">{name}</span>
        <span className="item-info__cuisine">{cuisine}</span>
        <span className="item-info__availability">{availability}</span>
      </div>
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
