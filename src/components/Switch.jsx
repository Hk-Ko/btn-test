import React from 'react'
import './Switch.css'

const Switch = ({isToggle,onToggle}) => {
  return (
    <label className='switch mt-5'>
        <input type="checkbox" checked={isToggle} onChange={onToggle}/>
        <span className='slider'/>
    </label>
  )
}

export default Switch