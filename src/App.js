import {Container, Row, Col} from "react-bootstrap";
import Vizitka from "./components/Vizitka";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Container className="App">
      <Row>
        <Col sm={4}>
          <Vizitka/>
        </Col>
        <Col sm={4}></Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default App;
