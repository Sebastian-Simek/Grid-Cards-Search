import useSearch from '../hooks/use-search';


export default function App() {
  const { types } = useSearch();
  // console.log('types', types);
 

  return <div>Hello World</div>;
}
