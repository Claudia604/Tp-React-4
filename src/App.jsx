import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./App.css";
import Ejercicio from "./components/Ejercicio";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <main>
        <h1 className="text-center my-5">EJERCICIO 4</h1>
        <Ejercicio />
      </main>
    </Container>
  );
}

export default App;
