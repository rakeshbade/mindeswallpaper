import React, { useState } from 'react'
import * as htmlToImage from 'html-to-image';
import "./shared.styles.css"
import {
    IonButton,
    IonItem,
    IonLabel,
    IonRow,
    IonSelect,
    IonSelectOption
} from '@ionic/react';
import Resolutions from "../local/resolution.data.json";
import { ColorPaletteModel } from '../models/color.model';
import { useSelector } from 'react-redux';

function ApplyComponent() {
    const [selectedResolution, setSelectedResolution] = useState<string>('');
    const selectedColor: ColorPaletteModel = useSelector((state: any) => state.colorReducer);
    const selectedPattern = useSelector((state: any) => state.patternReducer)

    const downloadImage = () => {
        const [w, h] = selectedResolution?.split('x');
        const ele = document.createElement("div");
        ele.className = selectedPattern.name;
        ele.style.color = selectedColor.pattern || '';
        document.body.appendChild(ele);
        htmlToImage.toJpeg(ele, {
            width: Number(w),
            height: Number(h),
            canvasWidth: Number(w),
            canvasHeight: Number(h),
            backgroundColor: selectedColor.background || '',
        })
        .then(function (dataUrl) {
            if(!dataUrl || dataUrl.length < 10) return;
            var link = document.createElement('a');
            link.download = `${document.title}-${selectedPattern.name}`;
            link.href = dataUrl;
            link.click();
        }).catch(function (error) {
            console.error('oops, something went wrong!', error);
        });

    }
    return (
        <>
            <IonItem>
                <IonLabel>Resolution</IonLabel>
                <IonSelect value={selectedResolution} onIonChange={(e) => setSelectedResolution(e.detail.value)}>
                    {Resolutions.map((resolution, index) => <IonSelectOption value={resolution.Resolution} key={index}>{resolution.Device}</IonSelectOption>)}
                </IonSelect>
            </IonItem>
            <IonRow className="ion-justify-content-center download-btn" >
                <IonButton type="button" onClick={downloadImage} size="large" disabled={!selectedResolution}>Download</IonButton>
            </IonRow>
        </>
    )
}

export default ApplyComponent
