import React, { useState } from "react";
import './App.css'

const App = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const increase = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrease = () => {
    setValue((prevState) => prevState - 1);
  };
  return (
    <div className="main">
      <div className={value < 0 ? 'red' : 'value'}>{value}</div>
      <div className="buttons">
        <button type="button" onClick={increase}>
          Increase
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
        <button type="button" onClick={decrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
