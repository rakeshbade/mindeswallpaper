import React from 'react'
import  "./shared.styles.css"
function GridLayoutComponent(props:any) {
    return (
        <div className="grid-container">
            {
               props.items.map((x:any,i:number)=><div className="grid-item" key={i}>{x}</div>)
            }
        </div>
    )
}

export default GridLayoutComponent
