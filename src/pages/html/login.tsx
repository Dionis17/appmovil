import React from 'react';
import { IonPage, IonContent, IonButton, IonCard } from '@ionic/react';
import '../css/login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="login-container">
        <div className="login-card">
          <h2>Bienvenido</h2>
          <p className="subtitle">Esta es una plataforma enfocada para el seguimiento de los estudiantes.</p>

          <div className="button-group">
            <IonCard routerLink="/iniciar">
              <IonButton expand="full" fill="clear" className="login-btn" routerLink="/notificaciones">
                Iniciar sesión
              </IonButton>
            </IonCard>
            <IonButton expand="full" fill="clear" className="signin-btn">
              Registrarse
            </IonButton>
          </div>

          <p className="social-text">O ingresa con</p>
          <div className="social-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
