import React from 'react';
import './App.css';
import Message from './Message';
import Power from './Power';
import Complex from './Complex';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Lab1 – React</h1>

      {/* Zadanie 3a i 3b */}
      <Message text="Witaj w aplikacji React!" />

      {/* Zadanie 3c */}
      <Power />

      {/* Zadanie 3d */}
      <Complex />
    </div>
  );
}

export default App;