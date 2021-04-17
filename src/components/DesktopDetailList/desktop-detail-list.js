import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '../List/list';
import ListItem from '../ListItem/list-item';
import Details from '../Details/details';
import Map from '../Map/map';

function DesktopDetailList({ classname, data, children }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    setSelectedItem(data.find((item) => item.id === id));
  };

  return (
    <div className="desktop-list">
      <List
        data={data || []}
        onItemClick={handleItemClick}
        className="widget"
        selectedId={selectedItem?.id}
        render={ListItem}
      />
      {selectedItem && (
        <div className="desktop-list__details">
          <Details {...selectedItem} className="widget" />
          <Map pointer={selectedItem} className="widget" />
        </div>
      )}
    </div>
  );
}

DesktopDetailList.defaultProps = {
  className: null,
  data: [],
};

DesktopDetailList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DesktopDetailList;
