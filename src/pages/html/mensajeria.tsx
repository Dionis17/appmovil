import React, { useState, useEffect } from 'react';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton 
} from '@ionic/react';
import io from 'socket.io-client';
import '../css/chat.css'; // Importar el archivo CSS para el chat

const socket = io('http://localhost:5000'); // Cambia esto a tu backend

interface Mensaje {
  remitente: string;
  destinatario: string;
  contenido: string;
}

const Chat: React.FC = () => {
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const usuario = 'padre_001'; // Simulación de usuario autenticado
  const destinatario = 'profesor_005';

  useEffect(() => {
    socket.on('recibirMensaje', (nuevoMensaje: Mensaje) => {
      setMensajes((prevMensajes) => [...prevMensajes, nuevoMensaje]);
    });
    return () => {
      socket.off('recibirMensaje');
    };
  }, []);

  const enviarMensaje = () => {
    if (mensaje.trim() !== '') {
      const nuevoMensaje: Mensaje = { remitente: usuario, destinatario, contenido: mensaje };
      socket.emit('enviarMensaje', nuevoMensaje);
      setMensajes([...mensajes, nuevoMensaje]);
      setMensaje('');
    }
  };

  return (
    <IonPage>
      <IonHeader  >
        <IonToolbar>
          <IonTitle className='labelChat'> Chat con el Profesor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {mensajes.map((msg, index) => (
            <IonItem key={index} color={msg.remitente === usuario ? 'light' : 'secondary'}>
              <IonLabel>{msg.contenido}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <div className="input-container">
        <IonInput
          placeholder="Escribe un mensaje..."
          value={mensaje}
          onIonChange={(e) => setMensaje(e.detail.value!)}
          aria-label="Escribe un mensaje"
        />
        </div>
      </IonContent>
      <div className="button-container">
        <IonButton expand="full" onClick={enviarMensaje} aria-label="Enviar mensaje">
          Enviar
        </IonButton>
      </div>
    </IonPage>
  );
};

export default Chat;
