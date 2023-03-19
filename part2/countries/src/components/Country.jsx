
import Weather from './Weather';

function Country({ country }) {


  return (
    <section>
      {country && (
        <div>
          <h2>{country.name.common}</h2>
          <p>Capital : {country.capital}</p>
          <p>Area : {country.area}</p>
          <h3>Languages</h3>
          <ul>
            {Object.keys(country.languages).map((key, index) => {
              return <li key={index}>{country.languages[key]}</li>;
            })}
          </ul>
          <img src={country.flags.svg} alt="something" width="300" />
        </div>
      )}
      <Weather capital={country.capital && country.capital[0] } />
    </section>
  );
}

export default Country;
