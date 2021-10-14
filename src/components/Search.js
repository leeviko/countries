import React from 'react'

const Search = ({ query, setQuery }) => {

  return (
    <div className="search">
      <input 
        type="text" 
        name="query" 
        onChange={(e) => setQuery(e.target.value)} 
        value={query} 
        className="search-value"
        placeholder="Search for countries..."
      />
    </div>
  )
}

export default Search
