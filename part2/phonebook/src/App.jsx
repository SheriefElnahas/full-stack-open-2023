import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Eren Yeager', number: '010' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    persons.find((person) => {
      if (person.name.toLowerCase() === newName.toLowerCase()) {
        alert(`${newName} is already added to the phonebook`);
      }
    });
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">
            Name :
            <input type="text" value={newName} onChange={handleNameChange} />
          </label>
        </p>
        <div>Debug Name: {newName}</div>
        <p>
          <label htmlFor="number">
            Number :
            <input type="number" value={newNumber} onChange={handleNumberChange} />
          </label>
        </p>
        <div>Debug Number: {newNumber}</div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
