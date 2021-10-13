import React from 'react'

const GridItem = ({ name, population, flag }) => {
  return (
    <div className="grid-item">
      <div className="grid-item-content">
        <div className="item-img">
          <img alt="" src={flag} />
        </div>
        <div className="item-info">
          <p>Name: <span className="info">{name}</span></p>
          <p>Population: <span className="info">{population}</span></p>
        </div>
      </div>
    </div>
  )
}

export default GridItem
