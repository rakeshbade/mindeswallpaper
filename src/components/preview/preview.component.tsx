import { IonButton, IonCard, IonHeader, IonIcon, IonModal, IonRippleEffect, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import BackgroudBuilderComponent from "../bgbuilder/bgbuilder.component"
import {Device} from '@capacitor/device'

import "./preview.styles.css";
import { arrowBack } from 'ionicons/icons';


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
            <IonHeader >
                <IonToolbar>
                    <IonTitle>Preview</IonTitle>
                    <IonButton slot='start' routerDirection='back' fill="clear" color="medium" onClick={()=>setIsBuilderOpen(false)}>
                        <IonIcon slot="end" icon={arrowBack}  />
                    </IonButton>
                </IonToolbar>
                </IonHeader>
                <BackgroudBuilderComponent platformName={device} isPreviewOpen={isBuilderOpen} />
            </IonModal>
        </div>
    );
}
export default PreviewCompoment