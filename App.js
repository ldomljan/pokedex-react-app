
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Pokemons</h1>

        
        <Switch>
          
          <Route path="/pokedex" component={Pokedex} />

          
          <Route path="/pokemon/:name" component={PokemonDetail} />

          
          <Route path="/about" component={About} />

          
          <Route exact path="/">
            <Redirect to="/pokedex" />
          </Route>

        
          <Route path="*">
            <div>404 Not Found</div>
          </Route>
        </Switch>

        
      </div>
    </Router>
  );
};

export default App;
