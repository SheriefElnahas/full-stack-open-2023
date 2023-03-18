function CountryList(countries) {
  return (
    <>
      {countries.countries.map((country) => {
        return (
          <div key={country.name.common}>
            <p>
              {country.name.common} <button>Show me</button>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default CountryList;
