import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ListItemAccordion({ data, children, render }) {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = data;

  return (
    <li
      key={id}
      className={`list-item${isOpen ? ' list-item--selected' : ''}`}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      {render({ data })}
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
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  render: PropTypes.func.isRequired,
};

export default ListItemAccordion;
