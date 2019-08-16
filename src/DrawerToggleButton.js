import React from 'react';
import './toggleButton.css';
const DToggleButton=props=>(

    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button-line'></div>
        <div className='toggle-button-line'></div>
        <div className='toggle-button-line'></div>
    </button>


);
export default DToggleButton;