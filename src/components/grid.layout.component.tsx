import React, { MouseEventHandler, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createColorPalette } from '../services/color.service';
import ColorComponent from "./color.component";
import PatternComponent from './pattern.component'
import { TypeConstants } from '../constants';
const GridLayoutComponent = (props: { items: Array<any>, type: string }) => {
    const createPalette = createColorPalette;
    const dispatch = useDispatch();
    const selectedColor = useSelector((state: any) => state.colorReducer);
    const selectedPattern = useSelector((state: any) => state.patternReducer);
    const renderLayout = (item: any) => {
        switch (props.type) {
            case TypeConstants.color:
                const palette = createPalette(item);
                return palette ? <ColorComponent palette={palette} /> : ""
            case TypeConstants.pattern:
                return <PatternComponent pattern={item.name} key={item.name} />
            // case "text":
            //     return 
            default:
                return "";
        }
    }
    return (
        <div className="grid-container">
            {

                props.items.map((item: any, i: number) => {
                    let gridClass = "grid-item ";
                    gridClass += (
                        (selectedColor.id === item.id && props.type == TypeConstants.color) || 
                        (selectedPattern.id === item.id && props.type == TypeConstants.pattern)
                    ) ? "active" : "";
                    return (<div className={gridClass} key={i} onClick={() => { dispatch({ type: props.type, value: item }) }}>
                        {
                            renderLayout(item)
                        }
                    </div>)
                })
            }
        </div>
    )
}

GridLayoutComponent.defaultProps = {
    click: () => { }
}
export default GridLayoutComponent
