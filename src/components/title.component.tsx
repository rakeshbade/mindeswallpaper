import { IonHeader, IonToolbar, IonTitle } from '@ionic/react'
import React from 'react'
import "./shared.styles.css";
const TitleComponent:React.FC<{title:string}> = ({title})=>{
    return (
        <IonHeader>
        <IonToolbar>
            <IonTitle size="small" className="header-title">{title}</IonTitle>
        </IonToolbar>
        </IonHeader>
    )
}

export default TitleComponent
