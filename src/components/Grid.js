import React from 'react';

import GridItem from './GridItem';

const Grid = ({ result }) => {
  return (
    <div className="grid">
      <div className="grid-container">
        {
          typeof result === "object" ?
          result.map((item, i) => (
            <GridItem 
              key={item.population + item.ccn3} 
              name={item.name.common} 
              population={item.population} 
              flag={item.flags.svg} 
              capital={item.capital ? item.capital[0] : "Undefined"}
              currencies={item.currencies}
            />
          ))
          : <h3 className="error">{result}</h3>
        }
      </div>
    </div>
  )
}

export default Grid
