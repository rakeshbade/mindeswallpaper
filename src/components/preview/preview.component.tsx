import { IonCard, IonModal, IonRippleEffect } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import BackgroudBuilderComponent from "../bgbuilder/bgbuilder.component"
import {Device} from '@capacitor/device'

import "./preview.styles.css";


const PreviewCompoment = (props: any) => {
    const [isBuilderOpen, setIsBuilderOpen] = useState(false);
    const [device, setDevice] = useState('web')
    useEffect(() => {
        (async ()=>{
            const deviceInfo = await Device.getInfo();
            setDevice(deviceInfo.operatingSystem);
        })();
    }, [])
    return (
        <div slot='fixed'>
            <IonCard className='preview-content-container ion-activatable ripple-parent' onClick={()=>setIsBuilderOpen(true)}>
                <IonRippleEffect></IonRippleEffect>
                <span className='preview-content-hover'>Preview</span>
                <BackgroudBuilderComponent platformName={device} isPreviewOpen={isBuilderOpen}/>
            </IonCard>
            <IonModal isOpen={isBuilderOpen} onDidDismiss={()=>setIsBuilderOpen(false)}>
                <BackgroudBuilderComponent platformName={device} isPreviewOpen={isBuilderOpen} close={()=>setIsBuilderOpen(false)} />
            </IonModal>
        </div>
    );
}
export default PreviewCompoment