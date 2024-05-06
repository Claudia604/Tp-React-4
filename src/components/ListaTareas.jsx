import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareasProps, borrarTarea }) => {
  return (
    <ListGroup>
      {tareasProps.map((tarea, indice) => (
        <ItemTarea key={indice} itemTarea={tarea} borrarTarea={borrarTarea} />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
