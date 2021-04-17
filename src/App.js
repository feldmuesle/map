import React from 'react';
import setupIcons from './setup-icons';
import useDataFetch from './components/hooks/use-data-fetch';
import useScreenSize from './components/hooks/use-screen-size';
import DesktopDetailList from './components/DesktopDetailList/desktop-detail-list';
import List from './components/List/list';
import ListItemAccordion from './components/ListItemAccordion/list-item-accordion';
import './App.css';

setupIcons();

function App() {
  const [listData, isLoading, error] = useDataFetch();
  const [screenSize] = useScreenSize();

  function handleScreenSize() {
    if (screenSize > 700) {
      return <DesktopDetailList data={listData} />;
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
