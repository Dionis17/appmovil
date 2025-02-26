import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput, IonTextarea, IonSelect, IonSelectOption, IonButton, IonContent, IonPage } from '@ionic/react';

interface StudentGradeFormProps {
  studentName: string;
  onSubmit: (grade: number, comment: string, assessmentType: string) => void;
}

const StudentGradeForm: React.FC<StudentGradeFormProps> = ({ studentName, onSubmit }) => {
  const [grade, setGrade] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [assessmentType, setAssessmentType] = useState<string>('Tarea');

  const handleSubmit = () => {
    if (grade >= 0 && grade <= 100) {
      onSubmit(grade, comment, assessmentType);
    } else {
      alert('La calificación debe estar entre 0 y 100');
    }
  };

  // Limpiar los campos cuando el usuario hace foco
  const handleFocus = (setter: React.Dispatch<React.SetStateAction<any>>) => () => {
    setter('');
  };

  return (
    <IonPage>
      <IonContent>
        <div className="grade-form-container">
          <h2>Calificar a {studentName}</h2>

          <IonItem>
            <IonLabel position="floating">Tipo de Evaluación</IonLabel>
            <IonSelect value={assessmentType} onIonChange={(e) => setAssessmentType(e.detail.value!)}>
              <IonSelectOption value="Tarea">Tarea</IonSelectOption>
              <IonSelectOption value="Foro">Foro</IonSelectOption>
              <IonSelectOption value="Exposición">Exposición</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Calificación (0-100)</IonLabel>
            <IonInput
              type="number"
              value={grade}
              min={0}
              max={100}
              onIonChange={(e) => setGrade(parseInt(e.detail.value!, 10))}
              onIonFocus={handleFocus(setGrade)} // Limpiar cuando hace foco
              placeholder="Ingrese la calificación"
            />
          </IonItem>

          <IonItem>
            <IonLabel>Comentario</IonLabel>
            <IonTextarea
              value={comment}
              onIonChange={(e) => setComment(e.detail.value!)}
              onIonFocus={handleFocus(setComment)} // Limpiar cuando hace foco
              placeholder="Escribe un comentario"
            />
          </IonItem>

          <IonButton expand="full" onClick={handleSubmit}>
            Enviar Calificación
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StudentGradeForm;
