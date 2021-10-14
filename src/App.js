import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Navbar from './components/Navbar';
import Grid from "./components/Grid";


function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if(query) {
      const timer = setTimeout(() => {
        
        axios.get(`https://restcountries.com/v3.1/name/${query}`)
          .then(res => {
            setResult(res.data)
          })
          .catch(err => {
            setResult("Something went wrong :(")
          })
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [query])

  return (
    <div className="App">
      <Navbar query={query} setQuery={setQuery} />
      <div className="result">
        <Grid result={result} />
      </div>
    </div>
  );
}

export default App;
