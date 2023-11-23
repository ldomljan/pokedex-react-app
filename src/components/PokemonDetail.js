// PokemonDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonDetail = ({ match }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
     const name = window.location.pathname.split("/").pop();
    //  const { params } = match;
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [match]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      <p>
        
       Height: {pokemonDetails.height}
       {pokemonDetails.PokemonDetail}

      </p>
    </div>
  );
};

export default PokemonDetail;
