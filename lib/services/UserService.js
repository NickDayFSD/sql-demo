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

    updatedUser = {
      user.name,
      user.catchPhrase,
      
    }

    const user = await User.updateUser({ username, user.catchPhrase, user.pokemon });

    return user;
  }

}
