import React from 'react'

const GridItem = ({ name, population, flag, capital }) => {
  return (
    <div className="grid-item">
      <div className="grid-item-content">
        <div className="item-img">
          <img alt="" src={flag} />
        </div>
        <div className="item-info">
          <h2 className="info name">{name}</h2>
          <p>Population: <span className="info">{population}</span></p>
          <p>Capital city: <span className="info">{capital}</span></p>
        </div>
      </div>
    </div>
  )
}

export default GridItem
