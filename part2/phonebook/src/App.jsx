import { useState, useEffect } from 'react';

import personService from './services/personService';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const deleteUser = (userId) => {
    console.log(userId);
    const person = persons.find((person) => person.id === userId);

    const deleteCheck = window.confirm(`Delete ${person.name}`);
    if (deleteCheck) {
      personService.deleteUser(userId);
      setPersons(persons.filter((person) => person.id !== userId));
    }
  };
  return (
    <main>
      <h2>Phonebook</h2>

      <h3>Add a new</h3>

      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} searchTerm={searchTerm} deleteUser={deleteUser} />
    </main>
  );
};

export default App;
