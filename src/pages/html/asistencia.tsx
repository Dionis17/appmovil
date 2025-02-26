import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonList, IonItem, IonLabel, IonCheckbox, IonButton, IonRow, IonCol } from '@ionic/react';
import '../css/asistencias.css';

const AsistenciaMaestros: React.FC = () => {
  const [students, setStudents] = useState([
    { name: 'Estudiante 1', presente: false },
    { name: 'Estudiante 2', presente: false },
    { name: 'Estudiante 3', presente: false },
    { name: 'Estudiante 4', presente: false },
  ]);
  const [newStudent, setNewStudent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addStudent = () => {
    if (newStudent.trim() !== '') {
      setStudents([...students, { name: newStudent, presente: false }]);
      setNewStudent('');
    }
  };

  const toggleAttendance = (index: number, status: boolean) => {
    const updatedStudents = [...students];
    updatedStudents[index].presente = status;
    setStudents(updatedStudents);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro de Asistencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="asistencia-maestros-container">
        <div className="info-card">
          <h2>Clase: [Nombre de la clase]</h2>
          <p>Fecha: [Fecha actual]</p>
        </div>

        <IonSearchbar
          value={searchTerm}
          onIonInput={(e: any) => setSearchTerm(e.target.value)}
          placeholder="Buscar Estudiante..."
        />
        
        <IonList>
          {filteredStudents.map((student, index) => (
            <IonItem key={index} className="student-item">
              <IonCheckbox
                slot="start"
                checked={student.presente}
                onIonChange={(e) => toggleAttendance(index, e.detail.checked)}
              />
              <IonLabel>{student.name}</IonLabel>
              <div className="actions">
                <IonButton
                  color={student.presente ? 'danger' : 'success'}
                  onClick={() => toggleAttendance(index, !student.presente)}
                >
                  {student.presente ? 'Ausente' : 'Presente'}
                </IonButton>
              </div>
            </IonItem>
          ))}
        </IonList>

        <IonRow>
          <IonCol>
            <IonButton expand="block">Guardar</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand="block">Cancelar</IonButton>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonButton className="BTNasist" expand="block">Ver Asistencia</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default AsistenciaMaestros;
