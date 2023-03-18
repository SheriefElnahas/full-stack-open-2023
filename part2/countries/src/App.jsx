import { useState } from 'react';

import SearchInput from './components/SearchInput';
import Country from './components/Country';
import useAxios from './hooks/useAxios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { countries, error } = useAxios(searchTerm);

  const handleClick = (country) => {
    console.log(country);
  };

  const renderedElement = (countries) => {
    // Countries More Than 10
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;

      // Countries less than 10 and less than one - return every country name.
    } else if (countries.length < 10 && countries.length > 1) {
      return countries.map((country) => {
        return (
          <div key={country.name.common}>
            <p>
              {country.name.common} <button onClick={() => handleClick(country)}>Show</button>
            </p>
          </div>
        );
      });
    } else if (countries.length === 1) {
      return <Country country={countries[0]} />;
    }
  };

  return (
    <main>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {!error && renderedElement(countries)}
      {error && <p>{error}</p>}
    </main>
  );
}

export default App;
