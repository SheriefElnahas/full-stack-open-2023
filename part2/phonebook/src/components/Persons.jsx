import React from 'react';

function Persons({ persons, searchTerm }) {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((person) => {
          return (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          );
        })}
    </div>
  );
}

export default Persons;
