import React from 'react'
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import TitleComponent from "./../../components/title.component"
import ApplyComponent from "./../../components/apply.component"
import GridLayoutComponent from '../../components/grid.layout.component';
import * as PatternThemes from "./../../local/pattern.data.json"
import PreviewCompoment from '../../components/preview.component';

const ApplyPage: React.FC = () => {
    return (<IonPage id="apply">
        <TitleComponent title="Apply" />
        <IonContent>
            <PreviewCompoment />
        </IonContent>
        <IonContent>
            <ApplyComponent />
        </IonContent>
    </IonPage>)
};

export default ApplyPage
