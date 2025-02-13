import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import './login.css';

const Login: React.FC = () => {
  return (
    <IonPage className="body">
      <IonContent className="login-container">
        <div className="login-card">
          <h2>Bienvenido</h2>
          <p className="subtitle">Esta es una plataforma enfocada para el seguimiendo de los estudiantes.</p>

          <div className="button-group">
            <IonButton expand="full" fill="clear" className="login-btn">Iniciar sesión</IonButton>
            <IonButton expand="full" fill="clear" className="signin-btn">Registrarse</IonButton>
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
