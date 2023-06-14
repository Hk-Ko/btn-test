import React from 'react'
import { useState } from 'react'
import './App.css'
import Switch from './components/Switch'

const App = () => {

  const [isToggled,setIsToggled] = useState(false)

  return (
    <div className='container mx-auto'>
      <Switch isToggle={isToggled} onToggle={()=>setIsToggled(!isToggled)}/>
    </div>
  )
}

export default App