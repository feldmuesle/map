import React from 'react';
import PropTypes from 'prop-types';
import './list-item.css';

function ListItem({ data, onClick, selected, render }) {
  const { id } = data;

  return (
    <li
      key={id}
      className={`list-item${selected ? ' list-item--selected' : ''}`}
      onClick={() => onClick(id)}
    >
      {render({ data })}
    </li>
  );
}

ListItem.defaultProps = {
  selected: false,
};

ListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  render: PropTypes.func.isRequired,
};

export default ListItem;
