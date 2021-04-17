import setupIcons from './setup-icons';

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
          <List data={listData || []} onItemClick={handleItemClick} />
          {selectedItem && (
            <>
              <Details data={selectedItem} />
              <Map />
            </>
          )}
        </>
      )}
      {error && <div>{`We have a problem: ${error}`}</div>}
    </div>
  );
}

export default App;
