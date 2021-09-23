import React from 'react'

function ColorComponent(props:{palette:any}) {
    return (
        <ul className="color-grid-content">
            <li style={{background: '#' + props.palette.background}}></li>
            <li style={{background: '#' + props.palette.pattren}}></li>
            <li style={{background: '#' + props.palette.text}}></li>
        </ul>
    )
}

export default ColorComponent
