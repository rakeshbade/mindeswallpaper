import React, { useState } from 'react'
import * as htmlToImage from 'html-to-image';
import "./shared.styles.css"
import {
    IonButton,
    IonItem,
    IonLabel,
    IonLoading,
    IonRow,
    IonSelect,
    IonSelectOption,
    useIonAlert
} from '@ionic/react';
import Resolutions from "../local/resolution.data.json";
import { ColorPaletteModel } from '../models/color.model';
import { useSelector } from 'react-redux';

function ApplyComponent() {
    const [selectedIndex, setSelectedIndex] = useState<Number>();
    const selectedColor: ColorPaletteModel = useSelector((state: any) => state.colorReducer);
    const selectedPattern = useSelector((state: any) => state.patternReducer)
    const [showLoading, setShowLoading] = useState(false)
    const [presentErrorAlert] = useIonAlert();
    const downloadImage = () => {
        setShowLoading(true);
        setTimeout(async ()=>{
            const index:any = selectedIndex;
            const resolution = Resolutions[index]?.Resolution;
            const [w, h] = resolution?.split('x');
            const ele = document.createElement("div");
            ele.className = selectedPattern.name;
            ele.style.color = selectedColor.pattern || '';
            document.body.appendChild(ele);
            try{
                const dataUrl = await htmlToImage.toJpeg(ele, {
                    width: Number(w),
                    height: Number(h),
                    canvasWidth: Number(w),
                    canvasHeight: Number(h),
                    backgroundColor: selectedColor.background || '',
                });
                var link = document.createElement('a');
                link.download = `${document.title}-${selectedPattern.name}.jpg`;
                link.href = dataUrl;
                link.click();
    
            }catch(err){
                presentErrorAlert({
                    message: "Cannot create image."
                });
                console.error(err);
            }
            ele.remove();
            setShowLoading(false);
        },2000)
    }
    return (
        <div>
            <IonLoading isOpen={showLoading} message={'Please wait...'}/>
            <IonItem>
                <IonLabel>Resolution</IonLabel>
                <IonSelect value={selectedIndex} onIonChange={(e) => setSelectedIndex(e.detail.value)}>
                    {Resolutions.map((resolution, index) => <IonSelectOption value={index} key={index}>{resolution.Device}</IonSelectOption>)}
                </IonSelect>
            </IonItem>
            <IonRow className="ion-justify-content-center download-btn" >
                <IonButton type="button" onClick={downloadImage} size="large" disabled={(selectedIndex === null || selectedIndex === undefined)}>Download</IonButton>
            </IonRow>
        </div>
    )
}

export default ApplyComponent
