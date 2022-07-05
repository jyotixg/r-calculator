import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calc-app">
      <from>
        <input type="text" value={result} ref={inputRef} />
      </from>

      <div className="keypad">
        <button id="clear" onClick={clear} className="my-btn" >
          Clear
        </button>
        <button id="backspace" onClick={backspace} className="orange-btn my-btn">
          C
        </button>
        <button name="+" onClick={handleClick} className="orange-btn my-btn">
          +
        </button>
        <button name="7" className="grey-btn my-btn" onClick={handleClick} >
          7
        </button>
        <button name="8" className="grey-btn my-btn" onClick={handleClick} >
          8
        </button>
        <button name="9" className="grey-btn my-btn" onClick={handleClick} >
          9
        </button>
        <button name="-" onClick={handleClick} className="orange-btn my-btn">
          -
        </button>
        <button name="4" className="grey-btn my-btn" onClick={handleClick} >
          4
        </button>
        <button name="5" className="grey-btn my-btn" onClick={handleClick} >
          5
        </button>
        <button name="6" className="grey-btn my-btn" onClick={handleClick} >
          6
        </button>
        <button name="*" onClick={handleClick} className="orange-btn my-btn">
          &times;
        </button>
        <button name="1" className="grey-btn my-btn" onClick={handleClick} >
          1
        </button>
        <button name="2" className="grey-btn my-btn" onClick={handleClick} >
          2
        </button>
        <button name="3" className="grey-btn my-btn" onClick={handleClick} >
          3
        </button>
        <button name="/" onClick={handleClick} className="orange-btn my-btn">
          /
        </button>
        <button name="0" className="grey-btn my-btn" onClick={handleClick} >
          0
        </button>
        <button name="." className="grey-btn my-btn" onClick={handleClick} >
          .
        </button>
        <button id="result" className="my-btn" onClick={calculate} >
          Result
        </button>
      </div>
    </div>
  );
}

export default App;