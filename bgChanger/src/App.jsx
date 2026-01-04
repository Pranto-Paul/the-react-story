import { useState } from "react"
import ColorName from "./constants"
function App() {
  const [bgColor,setbgColor] = useState('red')

  return (
    <div className="h-screen" style={{backgroundColor: bgColor}}>
    {ColorName.map((color,index) => (
      <button key={index} onClick={() => setbgColor(color)} style={{backgroundColor: color,margin: "5px",padding: "5px",borderRadius: "5px"}}>{color}</button>
    ))}
    </div>
  )
}

export default App
