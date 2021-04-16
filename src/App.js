import React, { useState } from "react";
import useDataFetch from "./components/hooks/use-data-fetch";
import List from "./components/List/list";
import "./App.css";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [listData, isLoading, error] = useDataFetch();

  console.log("listData", listData);

  const handleItemClick = (id) => {
    setSelectedItem(listData.find((item) => item.it === id));
  };

  return (
    <div>
      {isLoading ? (
        <span className="loading">Is loading...</span>
      ) : (
        <List data={listData || []} onItemClick={handleItemClick} />
      )}
      {error && <div>{`We have a problem: ${error}`}</div>}
    </div>
  );
}

export default App;
