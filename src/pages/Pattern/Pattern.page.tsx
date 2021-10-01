import React, { useEffect, useState } from 'react'
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import TitleComponent from "./../../components/title.component"
import PreviewComponent from "./../../components/preview.component"
import GridLayoutComponent from '../../components/grid.layout.component';
import * as PatternThemes from "./../../local/pattern.data.json"

const PatternPage: React.FC = () => {
    const [patternCollection, setPatternCollection] = useState<Array<any>>([])
    useEffect(() => {
        const patterns = PatternThemes.themes;
        setPatternCollection(patterns);
        return () => {

        }
    }, []);
    return (<IonPage id="pattern">
        <TitleComponent title="Pattern" />
        <IonContent>
            <PreviewComponent />
        </IonContent>
        <IonContent>
            {/* <IonGrid>
                <IonRow className="ion-justify-content-between">
                    <IonCol className="ion-text-start">Scale</IonCol>
                    <IonCol className="ion-text-end">ion-col</IonCol>
                </IonRow>
            </IonGrid> */}
            { patternCollection.length > 0 ? <GridLayoutComponent items={patternCollection}  type="pattern" /> : "" }
        </IonContent>
    </IonPage>)
};

export default PatternPage
