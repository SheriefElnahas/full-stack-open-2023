import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/name/';

function useAxios(searchTerm) {

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const constrcutredUrl = `${baseUrl}${searchTerm}`;

      if (searchTerm.length > 0) {
        setError(null);
        axios.get(constrcutredUrl).then((res) => {  
            setCountries(res.data);
          })
          .catch((err) => {
            setError('There is no country with this name');
          });
      }
    };
    fetchData();
  }, [searchTerm]);

  return { countries, error };
}

export default useAxios;
