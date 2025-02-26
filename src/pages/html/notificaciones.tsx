import React from 'react';
import { Card, CardContent } from '../../components/card';
import { Bell, CheckCircle, AlertCircle } from 'lucide-react';
import '../css/notificaciones.css';

const notifications = [
  { id: 1, type: 'info', title: 'Nueva tarea asignada', message: 'El profesor ha asignado una nueva tarea para Matemáticas.', time: 'Hace 2 horas' },
  { id: 2, type: 'warning', title: 'Reunión programada', message: 'Hay una reunión de padres este viernes a las 5 p.m.', time: 'Hace 1 día' },
  { id: 3, type: 'success', title: 'Calificación actualizada', message: 'Se ha actualizado la calificación de Ciencias.', time: 'Hace 3 días' }
];

type NotificationType = 'info' | 'warning' | 'success';

const NotificationIcon = ({ type }: { type: NotificationType }) => {
  switch (type) {
    case 'info':
      return <Bell className="text-blue-500" />;
    case 'warning':
      return <AlertCircle className="text-yellow-500" />;
    case 'success':
      return <CheckCircle className="text-green-500" />;
    default:
      return <Bell />;
  }
};

const Notifications = () => {
  return (
    <div>
      <header className="ClassNoti">
        <h1 className="text-xl font-bold">Notificaciones</h1>
      </header>
      <div className="space-y-4 p-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className="notification-card">
            <NotificationIcon type={notification.type as NotificationType} />
            <div className="notification-content">
              <h3 className="notification-title">{notification.title}</h3>
              <p className="notification-message">{notification.message}</p>
              <span className="notification-time">{notification.time}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
