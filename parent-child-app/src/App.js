import './App.css';
import { useState } from 'react';

function App() {
  const [childname, setChildname] = useState("Default");
  return (
    <div className="App">
     <h2>Hello React I'm Parent</h2>
     <p>Parent: My child said: {childname}</p>
    </div>
  );
}

export default App;
