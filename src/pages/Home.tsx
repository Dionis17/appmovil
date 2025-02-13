import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { personCircleOutline, bookOutline, peopleOutline, chatbubbleEllipsesOutline, calendarOutline, notificationsOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EduTract</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="home-container">
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard routerLink="/calificaciones">
                <IonCardHeader>
                  <IonIcon icon={bookOutline} className="card-icon" />
                  <IonCardTitle>Calificaciones</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard routerLink="/asistencia">
                <IonCardHeader>
                  <IonIcon icon={peopleOutline} className="card-icon" />
                  <IonCardTitle>Asistencia</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard routerLink="/notificaciones">
                <IonCardHeader>
                  <IonIcon icon={notificationsOutline} className="card-icon" />
                  <IonCardTitle>Notificaciones</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard routerLink="/mensajes">
                <IonCardHeader>
                  <IonIcon icon={chatbubbleEllipsesOutline} className="card-icon" />
                  <IonCardTitle>Mensajes</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard routerLink="/eventos">
                <IonCardHeader>
                  <IonIcon icon={calendarOutline} className="card-icon" />
                  <IonCardTitle>Eventos</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard routerLink="/perfil">
                <IonCardHeader>
                  <IonIcon icon={personCircleOutline} className="card-icon" />
                  <IonCardTitle>Perfil</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
