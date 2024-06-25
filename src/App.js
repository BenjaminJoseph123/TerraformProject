import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [lastResult, setLastResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const expression = input.replace(/√/g, 'Math.sqrt').replace(/\^/g, '**');
        const calculatedResult = eval(expression).toString();
        setResult(calculatedResult);
        setLastResult(calculatedResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'Ans') {
      setInput(input + lastResult);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <div className="input">
            <input type="text" value={input} readOnly />
            <input type="text" value={result} readOnly />
          </div>
          <div className="buttons">
            <div className="row">
              <button onClick={() => handleClick('(')}>(</button>
              <button onClick={() => handleClick(')')}>)</button>
              <button onClick={() => handleClick('^')}>^</button>
              <button onClick={() => handleClick('C')} className="clear">C</button>
            </div>
            <div className="row">
              <button onClick={() => handleClick('7')}>7</button>
              <button onClick={() => handleClick('8')}>8</button>
              <button onClick={() => handleClick('9')}>9</button>
              <button onClick={() => handleClick('/')}>&#247;</button>
            </div>
            <div className="row">
              <button onClick={() => handleClick('4')}>4</button>
              <button onClick={() => handleClick('5')}>5</button>
              <button onClick={() => handleClick('6')}>6</button>
              <button onClick={() => handleClick('*')}>*</button>
            </div>
            <div className="row">
              <button onClick={() => handleClick('1')}>1</button>
              <button onClick={() => handleClick('2')}>2</button>
              <button onClick={() => handleClick('3')}>3</button>
              <button onClick={() => handleClick('-')}>-</button>
            </div>
            <div className="row">
              <button onClick={() => handleClick('0')}>0</button>
              <button onClick={() => handleClick('.')}>&middot;</button>
              <button onClick={() => handleClick('=')}>=</button>
              <button onClick={() => handleClick('+')}>+</button>
            </div>
            <div className="row">
              <button onClick={() => handleClick('Math.sqrt(')}>&radic;</button>
              <button onClick={() => handleClick('Ans')} className="ans">Ans</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;





