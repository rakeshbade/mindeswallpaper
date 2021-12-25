import React from 'react'
import { useSelector } from 'react-redux';
import { ColorPaletteModel } from '../../models/color.model'
import "./bgbuilder.component.style.css";
const BackgroudBuilderComponent = (props:{isPreviewOpen: boolean, platformName: string}) => {
    const selectedColor: ColorPaletteModel = useSelector((state: any) => state.colorReducer);
    const selectedPattern = useSelector((state: any) => state.patternReducer)
    const styles:any = { color: selectedColor.pattern, backgroundColor: selectedColor.background};  
    if(selectedPattern.image){
        const imageUrl = decodeURIComponent(selectedPattern.image);
        const color =  selectedColor.pattern;
        const bgImgUrl = eval('`'+imageUrl+'`');
        styles.backgroundImage = `url("${bgImgUrl}")`;
    }
    return (
        <div className={'preview-wrapper ' + (props.isPreviewOpen ? props.platformName : '') } >
            <div style={styles} className={`background-item ${selectedPattern.name}`} >

            </div>
        </div>
    )
}

export default BackgroudBuilderComponent