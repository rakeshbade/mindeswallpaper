import React from 'react'
import {ColorPaletteModel} from '../../models/color.model'
import "./color.component.style.css"
function ColorComponent(props:{palette:ColorPaletteModel}) {
    return (
        <ul className="grid-content">
            <li style={{background: props.palette.background}}></li>
            <li style={{background: props.palette.pattern}}></li>
        </ul>
    )
}

export default ColorComponent
