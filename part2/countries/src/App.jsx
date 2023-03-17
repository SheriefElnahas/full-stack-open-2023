import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const baseUrl = 'https://restcountries.com/v3.1/name/';

  useEffect(() => {
    const constrcutredUrl = `${baseUrl}${searchTerm}`;

    if (searchTerm.length > 0) {

      setError(null);
      axios
        .get(constrcutredUrl)
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          setError('There is no country with this name')
        });
    }
  }, [searchTerm]);

  const renderedElement = (countries) => {
 if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (countries.length < 10 && countries.length > 1) {
      return countries.map((country) => <p key={country.name.common}>{country.name.common}</p>);
    } else if (countries.length === 1) {

      const { name, capital, area, languages, flags } = countries[0];
      return (
        <div>
          <h2>{name.common}</h2>
          <p>Capital : {capital}</p>
          <p>Area : {area}</p>
          <h3>Languages</h3>
          <ul>
            {Object.keys(languages).map((key, index) => {
              return <li key={index}>{languages[key]}</li>;
            })}
          </ul>
          <img src={flags.svg} alt="something" width="300" />
        </div>
      );
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <main>
      <label htmlFor="search">Find Countries</label>
      <input type="text" value={searchTerm} onChange={handleChange} id="search" />

      {!error &&  renderedElement(countries)}
      {error && <p>{error}</p>}
    </main>
  );
}

export default App;
