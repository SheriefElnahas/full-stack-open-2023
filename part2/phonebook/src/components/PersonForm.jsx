import { useState } from 'react';

function PersonForm({ persons, setPersons }) {
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

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newUser = { name: newName, number: newNumber };
      setPersons((prevState) => {
        return [...prevState, newUser];
      });
    }

    setNewName('');
    setNewNumber('');
  };

  return (
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
  );
}

export default PersonForm;
