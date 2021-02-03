  
import React from 'react';

const Planet = ({displayData}) => {    
      return(
        <div >
            <center>
            <h3>{displayData.name}</h3>
            <p>Climate: {displayData.climate} </p>
            <p>Terrain: {displayData.terrain}</p>
            <p>Surface Water: {displayData.surface_water}</p>
            <p>Population: {displayData.population}</p>
            </center>
        </div>
    )
}

export default Planet;