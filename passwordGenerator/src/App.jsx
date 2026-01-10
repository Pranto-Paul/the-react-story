import { useCallback, useEffect, useRef, useState } from "react"

const App = () => {
  const [password,setPassword] = useState("")
  const [isNumberAllowed,setIsNumberAllowed] = useState(false)
  const [isSpecialCharAllowed,setIsCharAllowed] = useState(false)
  const [length,setLength] = useState(8)

  const passwordGenerator=useCallback(()=>{
    let pass = ""
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(isNumberAllowed) char+= "0123456789"
    if(isSpecialCharAllowed) char += "#@%$&@#$&"
    for(let i=0; i<length; i++){
      pass += char.charAt(Math.floor(Math.random()*char.length))
    }
    setPassword(pass)
  },[length,isSpecialCharAllowed,isNumberAllowed])
  useEffect(()=>{
    passwordGenerator()
  },[length,isNumberAllowed,isSpecialCharAllowed,passwordGenerator])

  const passwordRef = useRef(null)
  const copyToClipBoard = () =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  return (
   <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
  <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 w-full max-w-md">
    <h1 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
      Password Generator
    </h1>
    <p className="text-slate-400 mb-6">Generate secure passwords with ease.</p>

    <div className="flex items-center gap-2 mb-6">
      <input
        type="text"
        name="password"
        id="password"
        value={password}
        ref={passwordRef}
        className="w-full bg-slate-700 text-cyan-400 px-4 py-2 rounded-lg outline-none border border-slate-600 focus:border-cyan-500 transition-all font-mono text-lg"
        readOnly
      />
      <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors shrink-0 shadow-lg shadow-blue-900/20" onClick={copyToClipBoard}>
        copy
      </button>
    </div>

    <div className="space-y-4">
      <div className="flex flex-col gap-4 bg-slate-700/50 p-4 rounded-xl border border-slate-600">
        {/* Length Slider */}
        <div className="flex items-center gap-x-3">
          <label htmlFor="length" className="text-slate-300 min-w-15">
            Length:
          </label>
          <input
            type="range"
            name="length"
            id="length"
            min={6}
            max={100}
            onChange={(e)=>setLength(Number(e.target.value))}
            className="cursor-pointer accent-blue-500 flex-1"
          />
          <span className="text-cyan-400 font-mono w-8 text-right">{length}</span>
        </div>

        <div className="flex items-center gap-8">
          {/* Number Toggle */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              name="number"
              id="number"
              defaultChecked={isNumberAllowed} 
              onChange={()=>setIsNumberAllowed(prev=>!prev)}
              className="w-4 h-4 rounded accent-blue-500"
            />
            <label htmlFor="number" className="text-slate-300 cursor-pointer select-none">
              Numbers
            </label>
          </div>

          {/* Special Char Toggle */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              name="specialchar"
              id="specialchar"
              defaultChecked={isSpecialCharAllowed}
              onChange={()=>setIsCharAllowed(prev=>!prev)}
              className="w-4 h-4 rounded accent-blue-500"
            />
            <label htmlFor="specialchar" className="text-slate-300 cursor-pointer select-none">
              Special Char
            </label>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default App