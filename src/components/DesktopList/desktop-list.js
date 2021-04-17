import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '../List/list';
import './desktop-list.css';

function DesktopList({ classname, data, listItemComponent, render }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    setSelectedItem(data.find((item) => item.id === id));
  };

  return (
    <div className="desktop-list">
      <List
        data={data}
        onItemClick={handleItemClick}
        className={`widget desktop-list__list${
          selectedItem ? '--selected' : ''
        }`}
        selectedId={selectedItem?.id}
        render={listItemComponent}
      />
      {selectedItem && (
        <div className={`desktop-list__details${selectedItem ? '--open' : ''}`}>
          {render({ data: selectedItem })}
        </div>
      )}
    </div>
  );
}

DesktopList.defaultProps = {
  className: null,
  data: [],
};

DesktopList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DesktopList;
