import React from 'react'

import Search from "./Search";

const Navbar = ({ query, setQuery }) => {
  return (
    <nav className="navbar">
      <div className="nav-items">
        <Search query={query} setQuery={setQuery} />
      </div>
    </nav>
  )
}

export default Navbar
