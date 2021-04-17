import React, { useState } from 'react';
import setupIcons from './setup-icons';
import useDataFetch from './components/hooks/use-data-fetch';
import List from './components/List/list';
import Details from './components/Details/details';
import Map from './components/Map/map';
import './App.css';

setupIcons();

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [listData, isLoading, error] = useDataFetch();

  console.log("listData", listData);

  const handleItemClick = (id) => {
    setSelectedItem(listData.find((item) => item.id === id));
    console.log("selectedItem", selectedItem);
  };

  return (
    <div>
      {isLoading ? (
        <span className="loading">Is loading...</span>
      ) : (
        <>
          <List
            data={listData || []}
            onItemClick={handleItemClick}
            className="widget"
            selectedId={selectedItem?.id}
          />
          {selectedItem && (
            <>
              <Details data={selectedItem} className="widget" />
              <Map pointer={selectedItem} className="widget" />
            </>
          )}
        </>
      )}
      {error && <div>{`We have a problem: ${error}`}</div>}
    </div>
  );
}

export default App;
