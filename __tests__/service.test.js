import Pokedex from 'pokedex-promise-v2';
import {
  makeReasonableNumber
} from '../lib/utils/pokedex.js';

describe('Pokemon API and associated functions', () => {

  it('Calls to the API to get a pokemon', async () => {
    const P = new Pokedex();

    P.getPokemonByName('eevee')
      .then((response) => {

        expect(response.name).toEqual('eevee');
      });
  });

  it('Calls to the API to get a pokemon by number', async () => {
    const P = new Pokedex();

    P.getPokemonByName('12')
      .then((response) => {

        expect(response.name).toEqual('butterfree');
      });
  });

  it('Takes in a name and produces a number', () => {
    const name = 'nick';

    const number = makeReasonableNumber(name);

    expect(number).toBe(37);
  });

  it('Takes in a name with spaces and produces a number', () => {
    const name = 'nick the brick';

    const number = makeReasonableNumber(name);

    expect(number).toBe(37);
  });
});
