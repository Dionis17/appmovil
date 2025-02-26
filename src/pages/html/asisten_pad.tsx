import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/react';
import '../css/asis_padres.css';

const AsistenciaPadres: React.FC = () => {
  const [showAttendance, setShowAttendance] = useState(false);

  const attendance = [
    { date: '2023-02-01', status: 'Presente' },
    { date: '2023-02-02', status: 'Ausente' },
    // Agrega más registros según sea necesario
  ];

  const toggleAttendance = () => {
    setShowAttendance(!showAttendance);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Asistencia de Estudiantes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="asistencia-padres-container">
        <IonCard className="summary-card">
        <IonCardTitle className="small-title">Resumen de Asistencia</IonCardTitle>
          <IonCardHeader>
         
            <IonCardSubtitle>Estudiante: [Nombre del Estudiante]</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonButton expand="full" color="tertiary" onClick={toggleAttendance}>
          {showAttendance ? 'Ocultar Asistencia' : 'Ver Asistencia'}
        </IonButton>

        {showAttendance && (
          <IonList>
            {attendance.map((record, index) => (
              <IonItem key={index} className={`attendance-item ${record.status.toLowerCase()}`}>
                <IonLabel>
                  <h2>{record.date}</h2>
                  <p>{record.status}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AsistenciaPadres;
