import { IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { ColorPaletteModel } from '../../models/color.model'
import "./bgbuilder.component.style.css";
import { arrowBack } from 'ionicons/icons';
const BackgroudBuilderComponent = (props:any) => {
    const selectedColor: ColorPaletteModel = useSelector((state: any) => state.colorReducer);
    const selectedPattern = useSelector((state: any) => state.patternReducer)
    return (
        <div className={'preview-wrapper ' + (props.isPreviewOpen ? props.platformName : '') } >
            {props.isPreviewOpen ? (<IonHeader >
                <IonToolbar>
                    <IonTitle>Preview</IonTitle>
                    <IonButton slot='start' routerDirection='back' fill="clear" color="medium" onClick={props.close}>
                        <IonIcon slot="end" icon={arrowBack}  />
                    </IonButton>
                </IonToolbar>
                </IonHeader>) : ''}
            
            <div style={{ color: selectedColor.pattern, backgroundColor: selectedColor.background }} className={`background-item ${selectedPattern.name}`} >

            </div>
        </div>
    )
}

export default BackgroudBuilderComponent