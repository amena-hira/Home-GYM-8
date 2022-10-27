import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() =>{
    fetch('activities.json')
    .then(res => res.json())
    .then(data => setActivities(data));
  },[])
  return (
    <div className="App">
      {
        activities.map(activity => <img src={activity.img} alt="" /> )
      }
    </div>
  );
}

export default App;
