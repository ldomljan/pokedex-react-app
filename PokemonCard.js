
import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ name }) => {
  return (
    <div>
      <Link to={`/pokemon/${name}`}>
        <h3>{Pikachu}</h3>
      </Link>
    </div>
  );
};

export default PokemonCard;
