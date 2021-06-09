import React from "react";
import imagen1 from "../img/imagen6.jpg";
import imagen2 from "../img/imagen2.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import "../style/Inicio.css";

const Home = (props) => (
  <div
    style={{
      backgroundPosition: "center",
      backgroundImage: `url(${imagen1}) `,
      // background: `url(${props.pic}) center center`,
    }}
    className="page"
  >
    <div className="pageRoot">
      <Container>
        <Row>
          <Col>
            <ScrollAnimation duration={3} animateIn="bounceInDown">
              <Image className="myImage" src={imagen2} roundedCircle />
            </ScrollAnimation>
            <ScrollAnimation duration={5} animateIn="fadeIn">
              <h1 className="myName">Francisco París Albero</h1>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
      {/* <div>Bienvenue sur notre site !</div> */}
    </div>
  </div>
);

export default Home;
