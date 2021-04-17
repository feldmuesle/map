import { useState, useEffect } from 'react';
import { default as restaurants } from '../../data/restaurants.json';

function useDataFetch(url, options) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setResponse(restaurants);
      setIsLoading(false);
    }, 1000);

    /*** If this were an actual api call ***

    fetch(url, options)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
    */
  }, [url]);
  return [response, isLoading, error];
}

export default useDataFetch;
