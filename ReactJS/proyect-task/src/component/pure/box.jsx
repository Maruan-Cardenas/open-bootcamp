import React, { useState, useEffect } from 'react';

const Box = ({ onMouseOut, onDoubleClick }) => {
    const [color, setColor] = useState({
    red: 0, green: 0, blue: 0
  })

  const box = {
    cursor: 'pointer',
    width: '255px',
    height: '255px',
    backgroundColor: `rgb(${color.red},${color.green}, ${color.blue})`
  }

  useEffect(() => {
    const interval =  setInterval(() => {
        setColor({
          red:  Math.floor((Math.random() * 255)),
          green:  Math.floor((Math.random() * 255)),
          blue:  Math.floor((Math.random() * 255))
        })
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }, [])
    
  return (
    <div style={box} onMouseOut={onMouseOut} onDoubleClick={onDoubleClick}>
      
    </div>
  );
}

export default Box;
