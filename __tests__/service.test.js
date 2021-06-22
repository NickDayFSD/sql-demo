import Pokedex from 'pokedex-promise-v2';

describe('is the API working?', () => {

  it('Calls to the API to get a pokemon', async () => {
    const P = new Pokedex();

    P.getPokemonByName('eevee')
      .then((response) => {

        expect(response.name).toEqual('eevee');
      });
  });
});
