import React from 'react'

function Country( {name, capital, area, languages, flags }) {
  return (
    <section>
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
  </section>
  )
}

export default Country