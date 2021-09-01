import React from 'react'
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import TitleComponent from "./../../components/title.component"
import PreviewComponent from "./../../components/preview.component"
import GridLayoutComponent from '../../components/grid.layout.component';
const PatternPage: React.FC = () => (
    <IonPage id="pattern">
        <TitleComponent title="Pattern" />
        <IonContent>
            <PreviewComponent />
        </IonContent>
        <IonContent>
            <IonGrid>
                <IonRow className="ion-justify-content-between">
                    <IonCol className="ion-text-start">Scale</IonCol>
                    <IonCol className="ion-text-end">ion-col</IonCol>
                </IonRow>
            </IonGrid>
            <GridLayoutComponent items={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
        </IonContent>
    </IonPage>
);

export default PatternPage
