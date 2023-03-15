import React from 'react';

function Persons({ persons, searchTerm, deleteUser }) {
  const handleDelete = (id) => {
    deleteUser(id);
  };
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((person) => {
          return (
            <div key={person.name}>
              {person.name} {person.number}
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default Persons;
