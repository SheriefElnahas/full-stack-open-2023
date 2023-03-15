import { useState, useEffect } from 'react';
import axios from 'axios';
import personService from './services/personService';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // axios.get('http://localhost:3000/persons').then((res) => {
    //   setPersons(res.data);
    // });
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <main>
      <h2>Phonebook</h2>

      <h3>Add a new</h3>

      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} searchTerm={searchTerm} />
    </main>
  );
};

export default App;
