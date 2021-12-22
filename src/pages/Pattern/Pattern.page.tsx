import React, { useEffect, useState } from 'react'
import { IonContent, IonPage } from '@ionic/react';
import TitleComponent from "./../../components/title.component"
import PreviewComponent from "./../../components/preview.component"
import GridLayoutComponent from '../../components/grid.layout.component';
import PatternModel from '../../models/pattern.model';
import { TypeConstants } from '../../constants';

const PatternPage = (props: {patternCollection:Array<any>}) => {
    const [patternCollection, setPatternCollection] = useState<Array<PatternModel>>([]);
    useEffect(() => {
        const patterns = props.patternCollection;
        setPatternCollection(patterns);
        return () => {

        }
    }, [patternCollection]);

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
            { patternCollection.length > 0 ? <GridLayoutComponent items={patternCollection}  type={TypeConstants.pattern} /> : "" }
        </IonContent>
    </IonPage>)
};

export default PatternPage
