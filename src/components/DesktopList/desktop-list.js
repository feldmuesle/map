import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '../List/list';
import './desktop-list.css';

function DesktopList({ data, listItemComponent, renderDetails }) {
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
          {renderDetails({ data: selectedItem })}
        </div>
      )}
    </div>
  );
}

DesktopList.defaultProps = {
  data: [],
};

DesktopList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  listItemComponent: PropTypes.func.isRequired,
  renderDetails: PropTypes.func.isRequired,
};

export default DesktopList;
