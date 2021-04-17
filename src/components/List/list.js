import React from 'react';
import PropTypes from 'prop-types';
import './list.css';

function List({ className, data, onItemClick, selectedId }) {
  return (
    <ul className={className ? `list ${className}` : 'list'}>
      {data.map((record) => {
        const { id, name, cuisine, availability } = record;
        return (
          <li
            key={id}
            className={`list__item${
              id === selectedId ? ' list__item--selected' : ''
            }`}
            onClick={() => onItemClick(id)}
          >
            <span className="item-info__name">{name}</span>
            <span className="item-info__cuisine">{cuisine}</span>
            <span className="item-info__availability">{availability}</span>
          </li>
        );
      })}
    </ul>
  );
}

List.defaultProps = {
  className: null,
  selectedId: null,
};

List.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
};

export default List;
