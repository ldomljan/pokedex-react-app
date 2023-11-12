
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  useEffect(() => {
    console.log('Pokedex component rendered');
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemonList(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  const handleNextPage = async () => {
    if (nextPage) {
      try {
        const response = await axios.get(nextPage);
        setPokemonList(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
      } catch (error) {
        console.error('Error fetching next page:', error);
      }
    }
  };

  const handlePrevPage = async () => {
    if (prevPage) {
      try {
        const response = await axios.get(prevPage);
        setPokemonList(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
      } catch (error) {
        console.error('Error fetching previous page:', error);
      }
    }
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <div>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
      <Pagination
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        hasNextPage={!!nextPage}
        hasPrevPage={!!prevPage}
      />
    </div>
  );
};

export default Pokedex;
