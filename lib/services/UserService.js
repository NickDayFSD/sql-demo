import User from '../models/User.js';
import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

export default class UserService {
  
  static async getByIdWithPokemon(id) {

    const user = await User.findById(id);

    // fetch from pokedex to get pokemon
    // return profile with pokemon
    const pokemon = await P.getPokemonByName('eevee')
      .then((response) => {
        return response.name;
      });

    return {
      ...user,
      pokemon
    };
  }}
