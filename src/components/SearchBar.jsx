function SearchBar({ search, setSearch }) {
  return (
    <label className="search-bar">
      <span>Search tasks</span>
      <input
        type="text"
        placeholder="Search by title or description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </label>
  );
}

export default SearchBar;
