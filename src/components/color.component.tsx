import React from 'react'
import {ColorPaletteModel} from '../models/color.model'

function ColorComponent(props:{palette:ColorPaletteModel}) {
    return (
        <ul className="grid-content">
            <li style={{background: props.palette.background}}></li>
            <li style={{background: props.palette.pattern}}></li>
            <li style={{background: props.palette.text}}></li>
        </ul>
    )
}

export default ColorComponent
