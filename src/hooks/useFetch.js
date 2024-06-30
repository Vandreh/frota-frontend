import { useState, useEffect } from 'react';
import api from '../services/api';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(endpoint);
      setData(response.data);
      setLoading(false);
    }

    fetchData();
  }, [endpoint]);

  return { data, loading };
};

export default useFetch;
