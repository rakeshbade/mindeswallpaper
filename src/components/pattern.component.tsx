import React from 'react'
import "pattern.css/dist/pattern.css";
import { useSelector } from 'react-redux';
import { ColorPaletteModel } from '../models/color.model';

function PatternComponent(props:{pattern: string}) {
    const selectedColor:ColorPaletteModel = useSelector((state:any) => state.colorReducer);
    return (
        <ul className="grid-content">
            <li className={props.pattern} style={{color: selectedColor.pattern, backgroundColor: selectedColor.background}}></li>
        </ul>
    )
}

export default PatternComponent
