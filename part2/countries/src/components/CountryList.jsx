import { useState } from 'react';
import Country from './Country';

function CountryList({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };
  return (
    <>
      <div>
        {countries.map((country) => {
          return (
            <div key={country.name.common}>
              <p>
                {country.name.common} <button onClick={() => handleShowCountry(country)}>Show me</button>
              </p>
            </div>
          );
        })}
      </div>
      {selectedCountry && <Country country={selectedCountry} />}
    </>
  );
}

export default CountryList;
