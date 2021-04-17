import React, { useState } from 'react';
import setupIcons from './setup-icons';
import useDataFetch from './components/hooks/use-data-fetch';
import useScreenSize from './components/hooks/use-screen-size';
import List from './components/List/list';
import ListItem from './components/ListItem/list-item';
import Details from './components/Details/details';
import Map from './components/Map/map';
import ListItemAccordion from './components/ListItemAccordion/list-item-accordion';
import './App.css';

setupIcons();

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [listData, isLoading, error] = useDataFetch();
  const [screenSize] = useScreenSize();

  const handleItemClick = (id) => {
    setSelectedItem(listData.find((item) => item.id === id));
  };

  function handleScreenSize() {
    if (screenSize > 700) {
      return (
        <div className="desktop">
          <List
            data={listData || []}
            onItemClick={handleItemClick}
            className="widget"
            selectedId={selectedItem?.id}
            render={ListItem}
          />
          {selectedItem && (
            <div className="sidebar">
              <Details {...selectedItem} className="widget" />
              <Map pointer={selectedItem} className="widget" />
            </div>
          )}
        </div>
      );
    }

    return (
      <List
        data={listData || []}
        className="widget"
        render={ListItemAccordion}
      />
    );
  }

  return (
    <div>
      {isLoading ? (
        <span className="loading">Is loading...</span>
      ) : (
        handleScreenSize()
      )}
      {error && <div>{`We have a problem: ${error}`}</div>}
    </div>
  );
}

export default App;
