import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Redirect, Route } from 'react-router';
import { colorPaletteOutline, downloadOutline, flowerOutline, textOutline} from "ionicons/icons"

import HomePage from './pages/Home/Home.page';
import ColorPage from "./pages/Color/Color.page";
import PatternPage from "./pages/Pattern/Pattern.page";
import TextPage from "./pages/Text/Text.page";
import ApplyPage from './pages/Apply/Apply.page';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tabs/:tab(home)" component={HomePage} exact />
          <Route path="/color" component={ColorPage} exact />
          <Route path="/pattern" component={PatternPage} exact />
          <Route path="/text" component={TextPage} exact />
          <Route path="/apply" component={ApplyPage} exact />
          <Route path="/" render={() => <Redirect to="/color" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="color" href="/color">
            <IonIcon icon={colorPaletteOutline} />
            <IonLabel>Color</IonLabel>
          </IonTabButton>
          <IonTabButton tab="pattern" href="/pattern">
            <IonIcon icon={flowerOutline} />
            <IonLabel>Pattern</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="text" href="/text">
            <IonIcon icon={textOutline} />
            <IonLabel>Text</IonLabel>
          </IonTabButton> */}
          <IonTabButton tab="apply" href="/apply">
            <IonIcon icon={downloadOutline} />
            <IonLabel>Apply</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
