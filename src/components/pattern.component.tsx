import React from 'react'
import "pattern.css/dist/pattern.css";

function PatternComponent(props:{pattern: string}) {
    return (
        <ul className="color-grid-content">
            <li className={props.pattern}></li>
        </ul>
    )
}

export default PatternComponent
