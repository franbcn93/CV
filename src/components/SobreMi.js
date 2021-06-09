import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagen3 from "../img/imagen3_1.gif";
import "../style/SobreMi.css";
import { sobreMi, adjectives, sentence } from "./Text";

const About = (props) => (
  <div
    style={{
      backgroundPosition: "center",
      backgroundImage: `url(${imagen3})`,
      // background: `url(${props.pic}) center center`,
    }}
    className="page"
  >
    <div className="pageRoot">
      <Container>
        <Row>
          <Col>
            <p className="myText">{sobreMi}</p>
            <p className="myText">{adjectives}</p>
            <p className="myText">{sentence}</p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default About;
