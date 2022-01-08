import React, { useState } from 'react'
import Box from './box'


const ColorSwitch = () => {
  const [boxColor, setBoxColor] = useState(false)

  const handleColorChange = () => {
    setBoxColor(true)
  }

  const handleStop = () => {
    setBoxColor(false)
  }
 
  const colorContainer = {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center', 
  }

  const box = {
    cursor: 'pointer',
    width: '255px',
    height: '255px',
    backgroundColor: 'black'
  }


  return (
    <div style={colorContainer}>
      <div style={box} onMouseEnter={handleColorChange}>
        {
          boxColor && <Box onMouseOut={handleStop} onDoubleClick={handleStop} />
        }
      </div>
    </div>
  )
}

export default ColorSwitch