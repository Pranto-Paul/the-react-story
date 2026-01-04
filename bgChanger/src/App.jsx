import ColorName from "./constants"
function App() {
  

  return (
    <div>
    {ColorName.map((color,index) => (
      <button key={index} style={{backgroundColor: color,margin: "5px",padding: "5px",borderRadius: "5px"}}>{color}</button>
    ))}
    </div>
  )
}

export default App
