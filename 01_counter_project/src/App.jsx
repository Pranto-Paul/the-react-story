import './App.css';
const App = () => {
  return (
    <div>
      <h2>Counter</h2>
      <h4>56</h4>

      <div>
        <button>Incrase</button>
        <button style={{ margin: '10px' }}>Decrase</button>
        <button>Reset</button>
      </div>
      <div>
        <input className="inputBox" type="text" name="" value={8} id="" />
        <button>Set to 8</button>
      </div>
    </div>
  );
};
export default App;
