import { useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Eren Yeager', number: '010' },
    { name: 'Levi Ackerman', number: '012' },
    { name: 'Zeke Yeager', number: '015' },
  ]);

  return (
    <main>
      <h2>Phonebook</h2>

      <h3>Add a new</h3>

      <Filter persons={persons} setPersons={setPersons} />

      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </main>
  );
};

export default App;
