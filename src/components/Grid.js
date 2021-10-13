import React from 'react';

import GridItem from './GridItem';

const Grid = ({ result }) => {
  return (
    <div className="grid">
      {
        result.map((item, i) => (
          <GridItem key={item.population} name={item.name.common} population={item.population} flag={item.flags.svg} />
        ))
      }
    </div>
  )
}

export default Grid
