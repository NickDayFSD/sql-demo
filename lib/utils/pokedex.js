import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

export function makeReasonableNumber(name) {
  const letArr = name.replace(/\s+/g, '').split('');
  const numArr = [];
  letArr.forEach(letter => {
    numArr.push(parseInt(letter, 36) - 9);
  });
  return numArr.reduce((a, b) => a + b, 0);
}

// export const getPokemon = async (num) => {
//   P.getPokemonByName(num)
//     .then(function());
  
//   return res.body;
// };
