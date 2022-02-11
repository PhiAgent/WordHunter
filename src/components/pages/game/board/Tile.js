import React, { useState, useEffect } from 'react';

const Tile = ({ letter, current, clear, clearBoard, setCurrent  }) => {
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    if (clear) {
      setBgColor('white');
      clearBoard(false);
    }
  }, [bgColor, clear]);

  const handleClick = e => {
    if (bgColor === 'white' || bgColor === '#ADD8E6') {
      setBgColor('#0275d8');
      setCurrent(current + letter);
    } else if (bgColor === '#0275d8' && current.slice(-1) === letter) {
      setBgColor('white');
      setCurrent(current.slice(0, -1))
    }
  }

  const handleMouseEnter = () => {
    if (bgColor === 'white') setBgColor('#ADD8E6');
  }
  const handleMouseLeave = () => {
    if (bgColor === '#ADD8E6') setBgColor('white')
  }

  return (
    <li
      onClick={handleClick}
      className="tile"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {letter}
    </li>
  )
}

export default Tile;