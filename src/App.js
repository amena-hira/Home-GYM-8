import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Main from './Component/Main/Main';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() =>{
    fetch('activities.json')
    .then(res => res.json())
    .then(data => setActivities(data));
  },[])
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
