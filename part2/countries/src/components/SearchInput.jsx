

function SearchInput({searchTerm, setSearchTerm}) {
  return (
    <div>
      <label htmlFor="search">Find Countries</label>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} id="search" />
    </div>
  );
}

export default SearchInput;
