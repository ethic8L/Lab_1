import React, { useState } from 'react';

function Power() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    const numX = parseFloat(x);
    const numY = parseFloat(y);


    if (isNaN(numX) || isNaN(numY)) {
      setError('Błąd: wprowadź poprawne liczby rzeczywiste.');
      setResult(null);
      return;
    }

    setError('');
    setResult(Math.pow(numX, numY));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h2>Potęgowanie x^y</h2>

      <label>
        Podstawa x:{' '}
        <input
          type="text"
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
      </label>
      <br />

      <label>
        Wykładnik y:{' '}
        <input
          type="text"
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
      </label>
      <br />

      <button onClick={handleCalculate}>Oblicz</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <p>Wynik: {result}</p>}
    </div>
  );
}

export default Power;