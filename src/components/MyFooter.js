import React, { Component } from "react";
import "../style/MyFooter.css";

export default class MyFooter extends Component {
  render() {
    return (
      <>
        <footer className="mainfooter" role="contentinfo">
          <div className="footer-middle">
            <h2 className="knowMe">Saber más...</h2>
            <ul className="social-network social-circle">
              <li>
                <a
                  href="https://www.facebook.com/francisco.p.albero"
                  className="icoFacebook"
                  title="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/FranciscoParisA"
                  className="icoLinkedin"
                  title="Linkedin"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/franciscoparisalbero1/"
                  className="icoInstagram"
                  title="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="tel:+34647410533"
                  className="icoMobile"
                  title="+34 647410533"
                >
                  <i className="fa fa-mobile"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:franciscoparisalbero@gmail.com"
                  className="icoEnvelope"
                  title="Envíame un correo"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr className="line"></hr>
          <h5 className="text-center">
            <strong>&copy; Copyright {new Date().getFullYear()}</strong>-
            Francisco París Albero. Todos los derechos están reservados.
          </h5>
          <br></br>
        </footer>
      </>
    );
  }
}
