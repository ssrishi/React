import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(4)
  const [numberAllowed, SetNumberAllowed] = useState(false)
  const [charAllowed, SetCharAllowed] = useState(false)
  const [password, SetPassword]  = useState("")
  const PG = useCallback(passwordGenerator ,[length, numberAllowed, charAllowed])

  const passwordRef = useRef(null)

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  function passwordGenerator(){
    let pass = '';
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers = "123456789"
    let characters = "@#$%^&*(){}?><!"

    if (numberAllowed) str += numbers; 
    if (charAllowed) str += characters; 

    for (let index = 0; index < length; index++) {
      const randonNum = Math.floor(Math.random() * str.length + 1);
      pass += str[randonNum]
    }
    SetPassword(pass)
  }
  useEffect(() =>{PG()},[length, numberAllowed, charAllowed, PG])
  return (
    <>
      <div className=' flex justify-center mt-28'>
        <div className=' h-auto sm:w-3/5 md:w-3/5  p-2 sm:p-5 rounded-xl flex flex-col gap-5 items-center bg-slate-600'>
          <div className=' sm:w-full flex justify-center '> 
            <input className='rounded-s-md overflow-hidden px-2 py-2  w-4/5' type="text" value={password} placeholder='password' ref={passwordRef} />
            <button onClick={copyToClipboard} className='bg-blue-500 text-white text-lg px-2 py-1 rounded-e-md'>Copy</button>
          </  div>
          <div className=' sm:flex text-white gap-5'>
            <div className=' flex gap-3 '>
              <input className=' cursor-pointer' 
              type="range"
              onChange={(e) => {setLength(e.target.value)}}
              min={4} max={20} 
              value={length} /> 
              <label>Length({length})</label>
            </div> 
            <div className='flex gap-x-1'>
              <input type="checkbox"
              defaultChecked={numberAllowed}
              onChange = {()=> {SetNumberAllowed((prev) => !prev)}}
              />
              <label>Numbers</label>
            </div>
            <div className='flex gap-1'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              onChange = {()=> {SetCharAllowed((prev) => !prev)}}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
