import React from 'react'
import ColorComponent from "./color.component";
import PatternComponent from './pattern.component'

const GridLayoutComponent = (props: { items: Array<any>, type: string }) => {
    const renderLayout = (item: any) => {

        switch (props.type) {
            case "color":
                const colors = item.swatches;
                const backgroundColor = colors[0].hex;
                const patternColor = colors[Math.floor(colors.length / 2)].hex;
                const textColor = colors[Math.floor(colors.length - 1)].hex;
                const palette = {
                    background: backgroundColor,
                    pattren: patternColor,
                    text: textColor
                }
                return Array.isArray(item.swatches) && item.swatches.length > 0 ? <ColorComponent palette={palette} /> : ""
            case "pattern":
                const patterns = item.swatches;
                const primaryPattern = patterns[0].name;
                return Array.isArray(item.swatches) && item.swatches.length > 0 ? <PatternComponent pattern = {primaryPattern} /> : ""
            // case "text":
            //     return 
            default:
                return "";
        }
    }
    return (
        <div className="grid-container">
            {
                props.items.map(
                    (item: any, i: number) =>
                        <div className="grid-item" key={i}>
                            {
                                renderLayout(item)
                            }
                        </div>
                )
            }
        </div>
    )
}

export default GridLayoutComponent
