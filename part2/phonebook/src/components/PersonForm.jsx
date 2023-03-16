import { useState } from 'react';

function PersonForm({ persons, setPersons, updateUser, setNotificationMessage }) {
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
    const person = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());

    if (person) {
      updateUser(person.id, { ...person, number: newNumber });
    } else {
      const newUser = { name: newName, number: newNumber };
      setPersons((prevState) => {
        return [...prevState, newUser];
      });
      setNotificationMessage(`Added ${newName}`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 2000);
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
