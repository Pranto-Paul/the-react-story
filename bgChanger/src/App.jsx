import { useState } from "react"
import ColorName from "./constants"
function App() {
  const [bgColor,setbgColor] = useState('black')

  return (
    <div className="h-screen" style={{backgroundColor: bgColor}}>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-900/80 flex flex-wrap justify-center gap-3 p-4 rounded-2xl">

    {ColorName.map((color,index) => (
      <button key={index} onClick={() => setbgColor(color)} className="outline-none cursor-pointer capitalize mx-2 px-4 py-2 rounded-xl hover:scale-110 transition duration-300 ease-in-out" style={{backgroundColor: color, color: color == "black"? "white" : "black"}}>{color}</button>
    ))}
      </div>
    </div>
  )
}

export default App
