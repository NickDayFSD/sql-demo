import User from '../models/User.js';

export default class UserService {
  
  static async getByIdWithPokemon(id) {

    // fetch from pokedex to get pokemon
    // return profile with pokemon
    const pokemon = await getPokemon(user.id);

    return {
      ...user,
      pokemon
    };
  }}
