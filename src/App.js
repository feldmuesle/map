import React from 'react';
import setupIcons from './setup-icons';
import useDataFetch from './components/hooks/use-data-fetch';
import useScreenSize from './components/hooks/use-screen-size';
import DesktopList from './components/DesktopList/desktop-list';
import List from './components/List/list';
import ListItem from './components/ListItem/list-item';
import ListItemAccordion from './components/ListItemAccordion/list-item-accordion';
import ListItemInfo from './components/ListItemInfo/list-item-info';
import Details from './components/Details/details';
import Map from './components/Map/map';
import './App.css';

setupIcons();

function App() {
  const [listData, isLoading, error] = useDataFetch();
  const [screenSize] = useScreenSize();

  function handleScreenSize() {
    if (screenSize > 700) {
      return (
        <DesktopList
          data={listData}
          listItemComponent={(props) => (
            <ListItem key={props.data.id} {...props} render={ListItemInfo} />
          )}
          render={({ data }) => {
            return (
              <>
                <Details {...data} className="widget" />
                <Map pointer={data} className="widget" />
              </>
            );
          }}
        />
      );
    }

    return (
      <List
        data={listData || []}
        className="widget"
        render={({ data }) => {
          return (
            <ListItemAccordion data={data} key={data.id} render={ListItemInfo}>
              <Details {...data} name={null} className="widget" />
              <Map pointer={data} className="widget" />
            </ListItemAccordion>
          );
        }}
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
