import { useState } from 'react';
import './App.css';
const App = () => {
  const [count, setCount] = useState(5);
  const [inputVal, setInputVal] = useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <h4>{count}</h4>

      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Incrase</button>
        <button
          disabled={count < 1}
          onClick={() => setCount((prev) => prev - 1)}
          style={{ margin: '10px' }}
        >
          Decrase
        </button>
        <button onClick={() => setCount(5)}>Reset</button>
      </div>
      <div>
        <input
          className="inputBox"
          onChange={(e) => {
            setInputVal(Number(e.target.value));
          }}
          type="text"
          name=""
          value={inputVal}
        />
        <button onClick={() => setCount(inputVal)}>Set to {inputVal}</button>
      </div>
    </div>
  );
};
export default App;
