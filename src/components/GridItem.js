import React, { useEffect, useState} from 'react'

const GridItem = ({ name, population, flag, capital, currencies }) => {
  const [curr, setCurr] = useState("")


  useEffect(() => {
    for (const property in currencies) {
      setCurr(currencies[property]);
    }
  }, [])


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
          <p>Currency: <span className="info">{curr.name} ({curr.symbol})</span></p>
        </div>
      </div>
    </div>
  )
}

export default GridItem
