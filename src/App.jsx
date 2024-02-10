import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");
  const [textColor, setTextColor] = useState("white")
  return (
      <>
        <div className="w-full h-screen flex items-center justify-center duration-200" style={{backgroundColor: color}}>
          <h1 className='text-8xl font-bold' style={{color: textColor}}>BG Changer</h1>
        </div>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-5 bg-slate-100 shadow-lg px-2 py-2 rounded-3xl'>
            
            <button className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "red"}}
            onClick={ () => { setColor("red"); setTextColor("black")}  }>Red</button>
            
            <button className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "blue"}}
            onClick={ () => { setColor("blue"); setTextColor("silver")} }>Blue</button>
            
            <button className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "green"}}
            onClick={ () => { setColor("green"); setTextColor("white")} }>Green</button>
            
            <button className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "orange"}}
            onClick={ () => { setColor("orange"); setTextColor("black")} }>Orange</button>
            
            <button className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "olive"}}
            onClick={ () => { setColor("olive"); setTextColor("#87CEEB")} }>Olive</button>
            
            <button className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "pink"}}
            onClick={ () => { setColor("pink"); setTextColor("black")}}>Pink</button>
            
            <button className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "violet"}}
            onClick={ () => { setColor("violet"); setTextColor("white")} }>Violet</button>
            
            <button className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "#6f2b4e"}}
            onClick={ () => { setColor("#6f2b4e"); setTextColor("white")} }>Mahroon</button>
            
            <button className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "#ffd966"}}
            onClick={ () => { setColor("#ffd966"); setTextColor("black")} }>Yellow</button>
          </div>
        </div>
      </>

  )
}

export default App
