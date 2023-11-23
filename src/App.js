
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Pokemons</h1>
 
        <Routes>
          
          <Route path="/pokedex" element={<Pokedex/>} />
   
          <Route path="/pokemon/:name" element={<PokemonDetail/>} />
 
          <Route path="/about" element={<About/>} />
            <Route path="/" element={ <Navigate to="/pokedex" />}/>
        
            <Route path="*" element={  <div>404 Not Found</div>}/>
  
         
        </Routes>

        
      </div>
    </Router>
  );
};

export default App;

