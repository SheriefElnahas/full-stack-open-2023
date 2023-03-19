import { useState, useEffect } from 'react';
import axios from 'axios';
import useDebounce from './useDebounce';

const baseUrl = 'https://restcountries.com/v3.1/name/';

function useAxios(searchTerm) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debounceSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchData = () => {
      const constrcutredUrl = `${baseUrl}${debounceSearchTerm}`;

      if (debounceSearchTerm.length > 0) {
        setLoading(true);
        setError(null);
        axios
          .get(constrcutredUrl)
          .then((res) => {
            setCountries(res.data);
            setLoading(false);
          })
          .catch((err) => {
            setError('There is no country with this name');
          });
      }
    };
    fetchData();
  }, [debounceSearchTerm]);

  return { countries, error, loading };
}

export default useAxios;
