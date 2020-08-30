import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';

import './App.css';

const App = () => {
  const [charcters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //axios returns a promise
  useEffect (() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(result.data)
      setCharacters(result.data);
      setIsLoading(false);
    }
    fetchCharacters();
  }, [])//add query for filter


  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} characters={charcters}/>
    </div>
  );
}

export default App;
