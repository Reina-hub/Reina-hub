import './App.css';

import { DataStore } from '@aws-amplify/datastore';
import { Leak } from './models';
import { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {

  const [leaks, setLeaks] = useState([])

  useEffect(() => {
    const func = async () => {
      const models = await DataStore.query(Leak)
      setLeaks(models)
    }
    func()

  }, [])

  const createLeak = async () => {
    const leak = {
      lon: window.prompt('leak lon'),
      lat: window.prompt('leak lat')
    }

    const newLeak = await DataStore.save(
      new Leak(leak)
    )
    console.log(newLeak)
  }
  return (
    <div className="App">
      <button onClick={createLeak}>Create Leak</button>
      {leaks.map(leak => <div key={leak.id}>
        <h1>{leak.lon}</h1>
        <h1>{leak.lat}</h1>
      </div>)}
  </div>
  );
}

export default withAuthenticator(App);
