import React, { useEffect, useState } from 'react'
import { IonContent, IonPage } from '@ionic/react';
import TitleComponent from "./../../components/title.component"
import PreviewComponent from "../../components/preview/preview.component"
import GridLayoutComponent from './../../components/grid.layout/grid.layout.component';
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
            { patternCollection.length > 0 ? <GridLayoutComponent items={patternCollection}  type={TypeConstants.pattern} /> : "" }
        </IonContent>
    </IonPage>)
};

export default PatternPage
