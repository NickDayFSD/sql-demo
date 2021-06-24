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
  
  static async updateUserWithPokemon(user) {
    const num = makeReasonableNumber(user.name);

    const pokemon = await P.getPokemonByName(num)
      .then((response) => {
        return response.name;
      });

    const id = user.id;
    const name = user.name;
    const catchPhrase = user.catchPhrase;

    const updatedUser = await User.updateUser({ name, catchPhrase, pokemon, id });

    return updatedUser;
  }

}
