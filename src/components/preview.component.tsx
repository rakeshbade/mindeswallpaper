import { IonImg, IonSlide, IonSlides } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import BackgroudBuilderComponent from "./bgbuilder/bgbuilder.component"

import "./shared.styles.css";
/* const slideOptions = {
    initialSlide: 1,
    speed: 400,
    length: 2
} */


const PreviewCompoment = (props:any) => {
    return (
        <div className="slides-container">
            <IonSlides pager={true} className="slides">
                <IonSlide className="iphone">
                    <BackgroudBuilderComponent />
                </IonSlide>
                <IonSlide className="android">
                    <BackgroudBuilderComponent  />
                </IonSlide>
            </IonSlides>
        </div>
    );
}
export default PreviewCompoment
