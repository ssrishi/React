import './App.css'

import { useState } from 'react'
function App() {
  let [color, setColor] = useState("violet")
  return (
    <>
      <div className=' flex justify-center w-full h-screen inset-x-0 px-2 ' style={{backgroundColor : color}}>
        <div className = 'flex gap-4 p-4 rounded-3xl bg-sky-50 border-2 border-black shadow-xl fixed bottom-10 '>
          <button className= ' py-2 px-5 shadow-lg border-2 bg-red-500 text-lg text-white border-white rounded-3xl' onClick={() => setColor("red")}>Red</button>
          <button className= ' py-2 px-5 shadow-lg border-2 border-white text-lg bg-green-500 text-white rounded-3xl' onClick={() => setColor("green")}>Green</button>
          <button className= ' py-2 px-5 shadow-lg border-2  border-white text-lg bg-blue-600 text-white rounded-3xl' onClick={() => setColor("blue")}>Blue</button>
          <button className= ' py-2 px-5 shadow-lg border-2  border-white text-lg bg-purple-300 text-white rounded-3xl' onClick={() => setColor("#E6E6FA")}>Lavender</button>
          <button className= ' py-2 px-5 shadow-lg border-2  border-white text-lg bg-yellow-400 text-white rounded-3xl' onClick={() => setColor("yellow")}>Yellow</button>
          <button className= ' py-2 px-5 shadow-lg border-2  border-white text-lg bg-black text-white rounded-3xl' onClick={() => setColor("black")}>Black</button>
          <button className= ' py-2 px-5 shadow-lg border-2  border-white text-lg bg-teal-500 text-white rounded-3xl' onClick={() => setColor("teal")}>Teal</button>
          <button className= ' py-2 px-5 shadow-lg border-2  border-white text-lg bg-pink-300 text-white rounded-3xl' onClick={() => setColor("pink")}>Pink</button>
        </div> 
      </div>
    </>
  )
}

export default App
