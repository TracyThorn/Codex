import React, { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <p>
        {counter}
      </p>
      <button onClick={() => {
        return setCounter(counter + 1);
      }}>Increase</button>
      <button onClick={() => {
        return setCounter(counter - 1);
      }}>Decrease</button>
    </div>
  );
}

export default App;
