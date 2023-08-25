import { useState, useEffect } from 'react';
import { HandleColorChangeFunc, FaveColors } from './types/commonTypes';
import './colorPicker.css';
import CopyPallet from './CopyPallet';

export default function ColorPicker() {
  const [color, setColor] = useState(String);
  // defining (an array) a useState of type FaveColors
  const [faves, setFaves] = useState<FaveColors>([]);
  const handleChange = (e: HTMLInputElement): HandleColorChangeFunc => {
    setColor(e.value);
  };

  const handleClick = (): HandleColorChangeFunc => {
    navigator.clipboard.writeText(color);
    alert('copied');
  };

  const handleSaveFave = (): HandleColorChangeFunc => {
    setFaves([
      ...faves,
      {
        id: new Date().getTime().toString(),
        colorCode: color,
      },
    ]);
  };

  useEffect(() => {
    // setting faves to localStorage
    localStorage.setItem('faves', JSON.stringify(faves));
  }, [faves]);

  return (
    <div className='color-container'>
      <div className='color_heads'>
        <h1>{color ? 'pick a color' : ' select a color'}</h1>
        <div style={{ display: color ? 'block' : 'none' }}>
          <h5 onClick={handleSaveFave}>add to faves</h5>
        </div>
      </div>

      <div>
        <input type='color' onChange={(e) => handleChange(e.target)} />
      </div>
      <div style={{ display: color ? 'block' : 'none' }}>
        {/* for users to test their colors! */}
        <h2 style={{ color, textTransform: 'uppercase', letterSpacing: 10 }}>
          test your color!
        </h2>
        {/* show selected code here */}
        <CopyPallet color={color} handleClick={handleClick} />
      </div>
    </div>
  );
}
