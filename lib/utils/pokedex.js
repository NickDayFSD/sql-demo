import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

export function makeReasonableNumber(name) {
  const letArr = name.split('');
  const numArr = [];
  letArr.forEach(letter => {
    numArr.push(parseInt(letter, 36) - 9);
  });
  return numArr.reduce((a, b) => a + b, 0);
}

// export const getPokemon = async (name) => {
//   const res = await P.getPokemonByName(name)
//     .then(function());
  
//   return res.body;
// };
