import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import TitleComponent from "./../../components/title.component";
import PreviewComponent from "../../components/preview.component";
import GridLayoutComponent from "../../components/grid.layout.component"
import React, { useEffect, useState } from 'react'
import * as ColorThemes from "./../../local/color.data.json"
const ColorPage: React.FC = () => {
    const [colorCollection, setColorCollection] = useState<Array<any>>([])
    useEffect(() => {
        const colors = ColorThemes.themes;
        setColorCollection(colors);
        return () => {

        }
    }, []);

    return (<IonPage id="color">
        <TitleComponent title="Color" />
        <IonContent>
            <PreviewComponent />
        </IonContent>
        <IonContent>
            {/* <IonGrid>
                <IonRow className="ion-justify-content-between">
                    <IonCol className="ion-text-start">Colors</IonCol>
                    <IonCol className="ion-text-end">ion-col</IonCol>
                </IonRow>
            </IonGrid> */}
            {
                colorCollection.length > 0 ? <GridLayoutComponent items={colorCollection}  type="color" /> : ""
            }
        </IonContent>
    </IonPage>)
};

export default ColorPage
