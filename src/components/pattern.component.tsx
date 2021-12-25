import React from 'react'
import "pattern.css/dist/pattern.css";
import "./../assets/styles/doodle/doodle.scss";
import { useSelector } from 'react-redux';
import { ColorPaletteModel } from '../models/color.model';
import PatternModel from '../models/pattern.model';

function PatternComponent(props:{pattern: PatternModel}) {
    const selectedColor:ColorPaletteModel = useSelector((state:any) => state.colorReducer);
    const selectedPattern:PatternModel = props?.pattern;
    const styles:any ={color: selectedColor.pattern, backgroundColor: selectedColor.background};
    if(selectedPattern?.image){
        const imageUrl = decodeURIComponent(selectedPattern.image);
        const color =  selectedColor.pattern;
        const bgImgUrl = eval('`'+imageUrl+'`');
        styles.backgroundImage = `url("${bgImgUrl}")`;
    }
    return (
        <ul className="grid-content">
            <li className={selectedPattern.name} style={styles}></li>
        </ul>
    )
}

export default PatternComponent
