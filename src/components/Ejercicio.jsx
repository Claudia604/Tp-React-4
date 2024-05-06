// Crear una aplicación web que  muestre una lista de tareas, al ingresar una tarea en el input y presionar enter,
// esta tarea se debe mostrar en una lista como la imagen a continuación:

import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const Ejercicio = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, nombreTarea]);
    setNombreTarea("");
  };

  const borrarTarea = (nombre) => {
    const tareasNuevas = tareas.filter((itemTarea) => itemTarea !== nombre);
    setTareas(tareasNuevas);
  };
  return (
    <section>
      <h2 className="text-center my-5">LISTA DE TAREAS</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e) => setNombreTarea(e.target.value)}
            value={nombreTarea}
          />
          <Button variant="primary" className="mx-2" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareasProps={tareas} borrarTarea={borrarTarea} />
    </section>
  );
};

export default Ejercicio;
