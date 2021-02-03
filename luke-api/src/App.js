import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import axios from 'axios';
import People from './components/People';
import Home from './components/Home';
import Planet from './components/Planet';

function App() {
  const [displayData, setDisplayData] = useState('');
  const handleClick = (selected, number) => {
    axios.get(`http://swapi.dev/api/${selected}/${number}`)
      .then(response => {
        setDisplayData(response.data);
        navigate(`/${selected}/${number}`);
      })
  }

  return (
    <div className="App">
      <Home handleClick={handleClick} />
      <Router>
        <People path="/people/:number" displayData={displayData} />
        <Planet path="/planets/:number" displayData={displayData} />
      </Router>
    </div>
  );
}

export default App;