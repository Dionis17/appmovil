import React from 'react';
import { 
  IonPage, 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonList, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent 
} from '@ionic/react';
import { funnelOutline } from 'ionicons/icons';
import '../css/eventos.css';

// Definir los tipos de las propiedades del componente EventCard
interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  buttonLabel: string;
  buttonAction: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, time, location, description, buttonLabel, buttonAction }) => (
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>{title}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      📅 {date} - 🕒 {time} <br />
      📍 {location} <br />
      ℹ️ {description}
    </IonCardContent>
    <IonButton expand="full" color="secondary" onClick={buttonAction}>
      {buttonLabel}
    </IonButton>
  </IonCard>
);

const Eventos: React.FC = () => {
  return (
    <IonPage>
      {/* Encabezado */}
      <IonHeader>
        <IonToolbar >
          <IonTitle className='encabesado'>Eventos </IonTitle>
          <IonButtons slot="end">
            <IonButton aria-label="Filtro de eventos">
              <IonIcon icon={funnelOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Contenido */}
      <IonContent>
        <IonList>
          <EventCard 
            title="Reunión de Padres"
            date="10 de marzo"
            time="5:00 PM"
            location="Salón de actos de la escuela"
            description="Importante reunión para discutir el desempeño académico y normativas escolares."
            buttonLabel="Confirmar asistencia"
            buttonAction={() => alert('Asistencia confirmada')}
          />
          <EventCard 
            title="Tarea de Matemáticas"
            date="Entrega: 15 de marzo"
            time="N/A"
            location="N/A"
            description="Tema: Geometría básica. Resolver los ejercicios de la página 45 del libro de texto."
            buttonLabel="Ver detalles"
            buttonAction={() => alert('Mostrando detalles de la tarea')}
          />
          <EventCard 
            title="Viaje Escolar"
            date="20 de marzo"
            time="7:00 AM"
            location="Museo Trampolin"
            description="Acompáñanos en un emocionante viaje educativo al museo trampolin."
            buttonLabel="Autorizar participación"
            buttonAction={() => alert('Participación autorizada')}
          />
        </IonList>

        {/* Botón para ver eventos aplicados */}
        <IonButton className='ver'>
          Ver eventos de mi hijo
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Eventos;
