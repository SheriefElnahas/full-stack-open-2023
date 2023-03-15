import { useState, useEffect } from 'react';

import personService from './services/personService';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const deleteUser = (userId) => {
    const person = persons.find((person) => person.id === userId);

    const deleteCheck = window.confirm(`Delete ${person.name}`);
    if (deleteCheck) {
      personService
        .deleteUser(userId)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== userId));
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const updateUser = (userId, userObj) => {
    const updateCheck = window.confirm(`${userObj.name} is already added to the phonebook, replace the old number with a new one ?`);

    if (updateCheck) {
      personService.update(userId, userObj).then((returnedUser) => {
        setPersons(persons.map((person) => (person.id !== userId ? person : returnedUser)));
      });
    }
  };
  return (
    <main>
      <h2>Phonebook</h2>

      <h3>Add a new</h3>

      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <PersonForm persons={persons} setPersons={setPersons} updateUser={updateUser} />
      <h3>Numbers</h3>
      <Persons persons={persons} searchTerm={searchTerm} deleteUser={deleteUser} />
    </main>
  );
};

export default App;
