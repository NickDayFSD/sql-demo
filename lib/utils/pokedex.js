import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

export const getPokemon = async (name) => {
  const res = await P.getPokemonByName(name)
    .then(function());
  
  return res.body;
};
