import { IonContent, IonPage } from '@ionic/react';
import TitleComponent from "./../../components/title.component";
import PreviewComponent from "../../components/preview/preview.component";
import GridLayoutComponent from './../../components/grid.layout/grid.layout.component';
import React, { useEffect, useState } from 'react'
import { TypeConstants } from '../../constants';

const ColorPage = (props: {colorCollection:Array<any>}) => {
    const [colorCollection, setColorCollection] = useState<Array<any>>([]);
    useEffect(() => {
        const colors = props.colorCollection;
        setColorCollection(colors);
        return () => {

        }
    },[colorCollection]);

    return (<IonPage id="color">
        <TitleComponent title="Color" />
        <IonContent>
            <PreviewComponent />
            {
                colorCollection.length > 0 ? <GridLayoutComponent items={colorCollection}  type={TypeConstants.color} /> : ""
            }
        </IonContent>
    </IonPage>)
};

export default ColorPage
