import React, { useState } from 'react';

function Complex() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');


  const parseComplex = (str) => {
    const cleaned = str.replace(/\s/g, '');


    const regex = /^([-+]?\d*\.?\d*)([-+]\d*\.?\d*)[ij]$/;
    const match = cleaned.match(regex);

    if (!match) return null;

    let realPart = match[1];
    let imagPart = match[2];


    let real = realPart === '' || realPart === '+' ? (realPart === '' ? 0 : 1)
             : realPart === '-' ? -1
             : parseFloat(realPart);

    let imag = imagPart === '+' ? 1
             : imagPart === '-' ? -1
             : parseFloat(imagPart);

    if (isNaN(real) || isNaN(imag)) return null;

    return { real, imag };
  };

  const handleModulus = () => {
    const parsed = parseComplex(input);
    if (!parsed) {
      setError('Błąd: niepoprawny format. Użyj np. "3+4i" lub "2+j5".');
      setResult(null);
      return;
    }
    setError('');
    const mod = Math.sqrt(parsed.real ** 2 + parsed.imag ** 2);
    setResult(`Moduł: ${mod}`);
  };

  const handleInverse = () => {
    const parsed = parseComplex(input);
    if (!parsed) {
      setError('Błąd: niepoprawny format. Użyj np. "3+4i" lub "2+j5".');
      setResult(null);
      return;
    }
    if (parsed.real === 0 && parsed.imag === 0) {
      setError('Błąd: nie można odwrócić zera.');
      setResult(null);
      return;
    }
    // 1/(a+bi) = (a-bi)/(a²+b²)
    const denominator = parsed.real ** 2 + parsed.imag ** 2;
    const invReal = parsed.real / denominator;
    const invImag = -parsed.imag / denominator;

    setError('');
    setResult(
      `Odwrotność: ${invReal.toFixed(4)} ${invImag >= 0 ? '+' : ''}${invImag.toFixed(4)}i`
    );
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h2>Liczba zespolona</h2>

      <label>
        Wpisz liczbę (np. 3+4i lub 2+j5):{' '}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <br />

      <button onClick={handleModulus}>Oblicz moduł</button>{' '}
      <button onClick={handleInverse}>Odwróć</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
}

export default Complex;