import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Eren Yeager', number: '010' },
    { name: 'Levi Ackerman', number: '012' },
    { name: 'Zeke Yeager', number: '015' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    const filtered = persons.filter((person) => person.name.toLowerCase().includes(e.target.value.toLowerCase()));

    setPersons(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    persons.find((person) => {
      if (person.name.toLowerCase() === newName.toLowerCase()) {
        alert(`${newName} is already added to the phonebook`);
        setNewName('');
        return;
      } else {
        const newUser = { name: newName, number: newNumber };
        setPersons((prevState) => {
          return [...prevState, newUser];
        });
      }
      setNewName('');
      setNewNumber('');
    });
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <label htmlFor="filter">
        Filter shown with
        <input type="text" onChange={handleFilter} />
      </label>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">
            Name
            <input type="text" value={newName} onChange={handleNameChange} />
          </label>
        </p>

        <p>
          <label htmlFor="number">
            Number
            <input type="number" value={newNumber} onChange={handleNumberChange} />
          </label>
        </p>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          return (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default App;
