import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import './colorBox.scss';

ColorBox.propTypes = {
    
};
function getRandomColor(){
    const COLOR_LIST=['deeppink','green','yellow','red'];
    const ramdomIndex=Math.trunc(Math.random()*5);
    return COLOR_LIST[ramdomIndex];

}

function ColorBox() {
    const initColor=localStorage.getItem('box_color')||'deeppink';
    console.log(initColor);
    const[color, setColor]=useState(initColor)
    function handleBoxClick(){
        const newColor=getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color',newColor);

    }
    return (
        <div className="color-box" 
        style={{backgroundColor:color}}
        onClick={handleBoxClick}
        >
            
            COLOR BOX
        </div>
    );
}

export default ColorBox;