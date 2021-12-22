import React from 'react'
import { useSelector } from 'react-redux';
import { ColorPaletteModel } from '../../models/color.model'
import PatternModel from '../../models/pattern.model'
import ".././shared.styles.css"
const BackgroudBuilderComponent = () => {
    const selectedColor: ColorPaletteModel = useSelector((state: any) => state.colorReducer);
    const selectedPattern = useSelector((state: any) => state.patternReducer)
    return (
        <div className="slide-item">
            <div style={{ color: selectedColor.pattern, backgroundColor: selectedColor.background }} className={`background-item ${selectedPattern.name}`} >

            </div>
        </div>
    )
}

export default BackgroudBuilderComponent