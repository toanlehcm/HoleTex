import { useState, useEffect } from 'react';

const useFetchData = (fetchData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();

        if (isMounted) {
          setData(result.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchDataAsync();

    return () => {
      isMounted = false;
    };
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetchData;
