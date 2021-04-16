import React from "react";
import useDataFetch from "./components/hooks/use-data-fetch";
import "./App.css";

function App() {
  const [listData, isLoading, error] = useDataFetch();

  console.log("listData", listData);

  return <div className="App">Hello sunshine</div>;
}

export default App;
