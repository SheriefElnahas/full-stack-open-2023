function Filter({ persons, setPersons }) {
  const handleFilter = (e) => {
    const filtered = persons.filter((person) => person.name.toLowerCase().includes(e.target.value.toLowerCase()));

    setPersons(filtered);
  };
  return (
    <div>
      <label htmlFor="filter">
        Filter shown with
        <input type="text" onChange={handleFilter} />
      </label>
    </div>
  );
}

export default Filter;
