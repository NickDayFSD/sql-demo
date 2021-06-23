import User from '../models/User.js';
import Pokedex from 'pokedex-promise-v2';
import { makeReasonableNumber } from '../utils/pokedex.js';

const P = new Pokedex();

export default class UserService {
  
  static async getByIdWithPokemon(id) {

    const user = await User.findById(id);

    const num = makeReasonableNumber(user.name);

    // fetch from pokedex to get pokemon
    // return profile with pokemon
    const pokemon = await P.getPokemonByName(num)
      .then((response) => {
        return response.name;
      });

    return {
      ...user,
      pokemon
    };
  }

  static async getAllWithPokemon() {
    const users = await User.findAll();

    const pokemon = await users.forEach(user => P.getPokemonByName(user.name))
      .then((response) => {
        return response;
      });
    
    console.log(pokemon);
    return pokemon;
  }

}
