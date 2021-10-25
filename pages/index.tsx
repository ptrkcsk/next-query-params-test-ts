import type { NextPage } from 'next'
import {useQueryParam, StringParam, withDefault} from 'next-query-params';

const Home: NextPage = () => {
  const [name, setName] = useQueryParam('name', withDefault(StringParam, ''));

  function onNameInputChange(event) {
    setName(event.target.value);
  }

  return (
    <p>My name is <input value={name} onChange={onNameInputChange} /></p>
  );
}

export default Home
