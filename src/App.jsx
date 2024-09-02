import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import moduleName from 'module';

function App() {
  const [color, Setcolor] = useState("olive");



  return (
    <>
      <div style={{ backgroundColor: color }} className=' h-screen inline-block w-screen' >
        <div className="topbar bg-white w-4/5 left-1/2 transform -translate-x-1/2 rounded-full fixed  top-10  flex align-middle p-3 justify-evenly">
          <button className='bg-purple-700 rounded-2xl px-4 py-2 text-white ' onClick={()=>Setcolor("purple")}>Purple</button>
          <button className='bg-blue-700 rounded-2xl px-4 py-2 w-20 text-white' onClick={()=>Setcolor("blue")}>Blue</button>
          <button className='bg-green-700 rounded-2xl px-4 py-2 w-20 text-white' onClick={()=>Setcolor("green")}>Green</button>
          <button className='bg-red-700 rounded-2xl px-4 py-2 w-20 text-white' onClick={()=>Setcolor("red")}>Red</button>
          <button className='bg-yellow-500 rounded-2xl px-4 py-2 w-20 text-white' onClick={()=>Setcolor("yellow")}>Yellow</button>
          <button className='bg-indigo-700 rounded-2xl px-4 py-2 w-20 text-white' onClick={()=>Setcolor("indigo")}>Indigo</button>
          <button className='bg-pink-700 rounded-2xl px-4 py-2 w-20 text-white' onClick={()=>Setcolor("pink")}>Pink</button>
          <button className='bg-teal-700 rounded-2xl p-2 w-20 text-white' onClick={()=>Setcolor("teal")}>Teal</button>
          <button className='bg-orange-700 rounded-2xl px-4 py-2 w-20 text-white' onClick={()=>Setcolor("orange")}>Orange</button>
          <button className='bg-gray-700 rounded-2xl px-4 py-2 w-20 text-white' onClick={()=>Setcolor("gray")}>Gray</button>
        </div>
      </div>
    </>
  )
}

export default App
