import { IonImg, IonSlide, IonSlides } from '@ionic/react';
import React, { useState, useEffect } from 'react'
import "./shared.styles.css";

/* const slideOptions = {
    initialSlide: 1,
    speed: 400,
    length: 2
} */


const PreviewCompoment: React.FC = () => {
    return (
        <div className="slides-container">
            <IonSlides pager={true} className="slides">
                <IonSlide>
                    <IonImg src="https://via.placeholder.com/200x300" className="slide-image" />
                </IonSlide>
                <IonSlide>
                    <IonImg src="https://via.placeholder.com/200x300" className="slide-image" />
                </IonSlide>
            </IonSlides>
        </div>
    );
}
export default PreviewCompoment
