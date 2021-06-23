import User from '../models/User.js';
import Pokedex from 'pokedex-promise-v2';
import { makeReasonableNumber } from '../utils/pokedex.js';

const P = new Pokedex();

export default class UserService {
  static async makeUserWithPokemon({ name, catchPhrase }) {
    const num = makeReasonableNumber(name);

    const pokemon = await P.getPokemonByName(num)
      .then((response) => {
        return response.name;
      });

    const user = await User.insert({ name, catchPhrase, pokemon });

    return user;
  }
  
  static async getByIdWithPokemon(id) {

    const user = await User.findById(id);

    // take the user name and turn it into a number
    const num = makeReasonableNumber(user.name);

    // fetch from pokedex to get pokemon using number
    const pokemon = await P.getPokemonByName(num)
      .then((response) => {
        return response.name;
      });

    // return user and pokemon
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
