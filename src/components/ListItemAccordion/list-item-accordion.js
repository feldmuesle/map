import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ListItemAccordion({ data, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { id, name, cuisine, availability } = data;

  return (
    <li
      key={id}
      className={`list-item${isOpen ? ' list-item--selected' : ''}`}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <div className="list-item__info item-info">
        <span className="item-info__name">{name}</span>
        <span className="item-info__cuisine">{cuisine}</span>
        <span className="item-info__availability">{availability}</span>
      </div>
      {isOpen && <div className="list-item__details">{children}</div>}
    </li>
  );
}

ListItemAccordion.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    cuisine: PropTypes.string,
    availability: PropTypes.string,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ListItemAccordion;
