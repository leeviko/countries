import React, { useState } from 'react'

const Search = ({ query, setQuery }) => {

  return (
    <div className="search">
      <input 
        type="text" 
        name="query" 
        onChange={(e) => setQuery(e.target.value)} 
        value={query} 
        className="search-value"
      />
    </div>
  )
}

export default Search
