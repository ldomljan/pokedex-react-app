
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

        {/* Define routes using the Switch component */}
        <Switch>
          {/* Route for the main Pokédex page */}
          <Route path="/pokedex" component={Pokedex} />

          {/* Route for the Pokémon detail page */}
          <Route path="/pokemon/:name" component={PokemonDetail} />

          {/* Route for the About page */}
          <Route path="/about" component={About} />

          {/* Redirect to the Pokédex page if no matching route is found */}
          <Route exact path="/">
            <Redirect to="/pokedex" />
          </Route>

          {/* Add a 404 Not Found route */}
          <Route path="*">
            <div>404 Not Found</div>
          </Route>
        </Switch>

        
      </div>
    </Router>
  );
};

export default App;
