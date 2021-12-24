import React from 'react'
import { IonContent, IonPage } from '@ionic/react';
import TitleComponent from "./../../components/title.component"
import ApplyComponent from "./../../components/apply.component"
import PreviewCompoment from '../../components/preview/preview.component';

const ApplyPage: React.FC = () => {
    return (<IonPage id="apply">
        <TitleComponent title="Apply" />
        <IonContent>
            <PreviewCompoment />
            <ApplyComponent />
        </IonContent>
    </IonPage>)
};

export default ApplyPage
