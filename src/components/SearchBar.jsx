
function SearchBar({ search, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search the collection..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {search && (
        <button onClick={() => onSearchChange('')}>
          Clear
        </button>
      )}
    </div>
  )
}

export default SearchBar
