import { useState } from 'react';

import useAxios from './hooks/useAxios';

import SearchInput from './components/SearchInput';
import Country from './components/Country';
import CountryList from './components/CountryList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { countries, error } = useAxios(searchTerm);

  const handleClick = (country) => {
    console.log(country);
  };

  const renderedElement = (countries) => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (countries.length < 10 && countries.length > 1) {
      return <CountryList countries={countries} />;
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
