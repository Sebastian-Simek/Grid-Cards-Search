import { fetchORReject } from './utils';

export const getAllTypes = async () => {
  const res = await fetchORReject(process.env.POKEDEX_URL + '/types');
  return res.json();
}; 

