import { useEffect, useState } from 'react';
import { getAllTypes } from '../services/pokemon';

export default function useSearch() {
  const [types, setTypes] = useState([]);

  const searchEffect = () => {
    const getTypes = getAllTypes();
    console.log('types', types);
    console.log('getTypes', getTypes);
    
    // getTypes.map((type) => setTypes([...types, type]));
    getAllTypes()
      .then(res => res.map((r => setTypes(r))));
    // getAllTypes()
    //   .then(res => setTypes(res.map(pokemon => (pokemon.type))));
  };

  useEffect(() => searchEffect(), []);

  return {
    types
  };
}
