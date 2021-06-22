import Pokedex from 'pokedex-promise-v2';

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

    function getPokemon(total, name, i) {
      return total += parseInt(name[i], 36);
    }

    function makeReasonableNumber(name) {
      const numArr = [];
      for (let i; i < name.length; i++) {
        console.log(name[i]);
        const number = parseInt(name[i], 36);
        numArr.push(number);
      }
      return numArr;
    }

    const number = makeReasonableNumber(name);

    // constnumber = getPokemon(total, name, i);
    // const number = 0;
    // for (let i; i < name.length; i++) {
    //   const num = parseInt(name[i], 36);
    //   console.log(num);
    // }

    expect(number).toBe(37);
  });
});
