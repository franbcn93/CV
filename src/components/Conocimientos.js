import React from "react";
import imagen from "../img/imagen3.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";

import "../style/Conocimientos.css";

const Products = (props) => (
  <div
    style={{
      backgroundPosition: "center",
      backgroundImage: `url(${imagen})`,
    }}
    className="page"
  >
    <div className="pageRoot">
      <Container>
        <Row>
          <Col>
            <h1>Habilidades</h1>
          </Col>
        </Row>
        <Row className="paddingTop">
          <Col>
            <Card className="myCard">
              <h2 className="skills skill1">Java</h2>
            </Card>
          </Col>
          <Col>
            <Card className="myCard">
              <h2 className="skills skill2">JavaScript</h2>
            </Card>
          </Col>
          <Col>
            <Card className="myCard">
              <h2 className="skills skill1">Pyhton</h2>
            </Card>
          </Col>
          <Col>
            <Card className="myCard">
              <h2 className="skills skill2">PHP</h2>
            </Card>
          </Col>
        </Row>

        <Row className="paddingTop">
          <Col>
            <Card className="myCard">
              <h2 className="skills skill2">SQL</h2>
            </Card>
          </Col>
          <Col>
            <Card className="myCard">
              <h2 className="skills skill1">MySQL</h2>
            </Card>
          </Col>
          <Col>
            <Card className="myCard">
              <h2 className="skills skill2">JSON</h2>
            </Card>
          </Col>
          <Col>
            <Card className="myCard">
              <h2 className="skills skill1">XML</h2>
            </Card>
          </Col>
        </Row>

        <Row className="paddingTop">
          <Col>
            <Card className="myCard">
              <h2 className="skills skill1">HTML</h2>
            </Card>
          </Col>
          <Col>
            <Card className="myCard">
              <h2 className="skills skill2">CSS</h2>
            </Card>
          </Col>
          <Col>
            <Card className="myCard">
              <h2 className="skills skill1">Git</h2>
            </Card>
          </Col>
          <Col>
            <Card className="myCard">
              <h2 className="skills skill2">Android Studio</h2>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Products;
