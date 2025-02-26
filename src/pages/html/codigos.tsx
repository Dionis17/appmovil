import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import '../css/estudent.css';

const GestionEmpleados: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Gestión de Empleados</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class="header-row">
            <IonCol>ID</IonCol>
            <IonCol>Nombre</IonCol>
            <IonCol>Puesto</IonCol>
            <IonCol>Departamento</IonCol>
            <IonCol>Acciones</IonCol>
          </IonRow>

          <IonRow>
            <IonCol>1</IonCol>
            <IonCol>Reyna de Casimiro</IonCol>
            <IonCol>Gerente</IonCol>
            <IonCol>Informática</IonCol>
            <IonCol>
              <IonButton fill="clear" color="primary">Editar</IonButton>
              <IonButton fill="clear" color="danger">Borrar</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>2</IonCol>
            <IonCol>Alberto de la Rosa</IonCol>
            <IonCol>Asistente</IonCol>
            <IonCol>Dirección</IonCol>
            <IonCol>
              <IonButton fill="clear" color="primary">Editar</IonButton>
              <IonButton fill="clear" color="danger">Borrar</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonButton expand="full" color="light" routerLink="/inicio">Volver al Inicio</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GestionEmpleados;
