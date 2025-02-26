import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import Home from './pages/html/login';
// Importacion de la pantalla de correctamente
import Eventos from './pages/html/eventos'; 
import Mensajeria from './pages/html/mensajeria'; 
import Asistencias from './pages/html/asistencia'; 
import Notificaciones from './pages/html/notificaciones'; 
import Iniciar from './pages/html/Home';
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

/* Ionic Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login">
          <Home />
        </Route>
        <Route exact path="/eventos">
          <Eventos />
        </Route>
        <Route exact path="/mensajes">
          <Mensajeria />
        </Route>
        <Route exact path="/asistencia">
          <Asistencias />
        </Route>
        <Route exact path="/notificaciones">
          <Notificaciones />
        </Route>
        <Route exact path="/iniciar">
          <Iniciar />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" /> {/* Cambié /home a /login */}
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
