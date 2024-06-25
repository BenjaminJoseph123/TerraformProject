import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const expression = input.replace(/√/g, 'Math.sqrt').replace(/\^/g, '**');
        const calculatedResult = eval(expression).toString();
        setResults([...results, { input: input, result: calculatedResult }]);
        setInput(''); // Clear input after calculation
      } catch (error) {
        setResults([...results, { input: input, result: 'Error' }]);
        setInput(''); // Clear input after error
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'Ans') {
      setInput(input + getLastResult());
    } else {
      setInput(input + value);
    }
  };

  const getLastResult = () => {
    if (results.length > 0) {
      return results[results.length - 1].result;
    }
    return '';
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <div className="input">
            {results.map((item, index) => (
              <div key={index}>
                <div>{item.input}</div>
                <div>{item.result}</div>
              </div>
            ))}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
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







