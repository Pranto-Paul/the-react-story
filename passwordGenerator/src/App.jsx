import { useState } from "react"

const App = () => {
  const [password,setPassword] = useState("")
  const [isNumberAllowed,setIsNumberAllowed] = useState(false)
  const [isSpecialCharAllowed,setIsCharAllowed] = useState(false)
  const [length,setLength] = useState(8)

  const passwordGenerator=()=>{
    let pass = ""
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(isNumberAllowed) char+= "0123456789"
    if(isSpecialCharAllowed) char += "#@%$&"
    for(let i=0; i<length; i++){
      pass += char.charAt(Math.floor(Math.random()*char.length))
    }
    setPassword(pass)
  }
  
  return (
    <div className="min-h-screen bg-slate-700 flex items-center justify-center">
      <div className="bg-slate-200 p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
        <p className="text-gray-600">Generate secure passwords with ease.</p>
        <h2>{password}</h2>
        <button onClick={()=>passwordGenerator()}>click</button>
      </div>
    </div>
  )
}

export default App