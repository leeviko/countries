import React from 'react';

import GridItem from './GridItem';

const Grid = ({ result }) => {
  return (
    <div className="grid">
      <div className="grid-container">
        {
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
        }
      </div>
    </div>
  )
}

export default Grid
