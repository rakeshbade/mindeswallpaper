import React from 'react'
import { useSelector } from 'react-redux';
import { ColorPaletteModel } from '../../models/color.model'
import "./bgbuilder.component.style.css";
const BackgroudBuilderComponent = (props:{isPreviewOpen: boolean, platformName: string}) => {
    const selectedColor: ColorPaletteModel = useSelector((state: any) => state.colorReducer);
    const selectedPattern = useSelector((state: any) => state.patternReducer)
    return (
        <div className={'preview-wrapper ' + (props.isPreviewOpen ? props.platformName : '') } >
            
            <div style={{ color: selectedColor.pattern, backgroundColor: selectedColor.background }} className={`background-item ${selectedPattern.name}`} >

            </div>
        </div>
    )
}

export default BackgroudBuilderComponent