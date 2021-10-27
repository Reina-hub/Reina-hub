// import './App.css';

// import { DataStore } from '@aws-amplify/datastore';
// import { Leak } from './models';
// import { useEffect, useState } from 'react';
// import { withAuthenticator } from '@aws-amplify/ui-react';

// function App() {

//   const [leaks, setLeaks] = useState([])

//   useEffect(() => {
//     const func = async () => {
//       const models = await DataStore.query(Leak)
//       setLeaks(models)
//     }
//     func()

//   }, [])

//   const createLeak = async () => {
//     const leak = {
//       lon: window.prompt('leak lon'),
//       lat: window.prompt('leak lat')
//     }

//     const newLeak = await DataStore.save(
//       new Leak(leak)
//     )
//     console.log(newLeak)
//   }
//   return (
//     <div className="App">
//       <button onClick={createLeak}>Create Leak</button>
//       {leaks.map(leak => <div key={leak.id}>
//         <h1>{leak.lon}</h1>
//         <h1>{leak.lat}</h1>
//       </div>)}
//   </div>
//   );
// }

// export default withAuthenticator(App);


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
           Hilo
        </header>
      </div>
    );
  }
}

// export default withAuthenticator(App);
export default App;