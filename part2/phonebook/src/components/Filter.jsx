function Filter({ searchTerm, setSearchTerm }) {
  const handleFilter = (e) => {
    setSearchTerm(e.target.value);

    // const filtered = persons.filter((person) => person.name.toLowerCase().includes(e.target.value.toLowerCase()));

    // setPersons(filtered);
  };
  return (
    <div>
      <label htmlFor="filter">
        Filter shown with
        <input type="text" value={searchTerm} onChange={handleFilter} />
      </label>
    </div>
  );
}

export default Filter;
