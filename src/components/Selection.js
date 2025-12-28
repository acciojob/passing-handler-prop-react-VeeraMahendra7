import React, { useState } from 'react'


const Selection = ({applyColor}) => {

    const [style, setStyle] = useState({background:""})
    
  return (
    <div className='fix-box' style={style} onClick={() => applyColor(setStyle)}>
        <h1 className='heading'>Selection</h1>
    </div>
  )
}

export default Selection
