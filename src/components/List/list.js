import React from 'react';
import PropTypes from 'prop-types';
import './list.css';

function List({ className, data, onItemClick, selectedId, render }) {
  return (
    <ul className={className ? `list ${className}` : 'list'}>
      {data.map((record) =>
        render({
          data: record,
          onClick: onItemClick && onItemClick,
          selected: record.id === selectedId,
        })
      )}
    </ul>
  );
}

List.defaultProps = {
  className: null,
  onItemClick: null,
  selectedId: null,
};

List.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
  selectedId: PropTypes.string,
};

export default List;
