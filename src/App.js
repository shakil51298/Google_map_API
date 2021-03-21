import logo from './logo.svg';
import './App.css';
import Map from './Components/Map';
import Direction from './Components/Direction/Direction';
import { useState } from 'react';

function App() {

  const [origin , setOrigin] = useState("")
  const [destination , setDestination] = useState("")
  return (
    <div className="App">
      {/* <Map/> */}
      <input type="text"placeholder="Strating From" onBlur={e => setOrigin(e.target.value)}/>
      <input type="text"placeholder="Going To" onBlur={e => setDestination(e.target.value)}/>
      <Direction origin={origin} destination={destination}/>
    </div>
  );
}

export default App;
