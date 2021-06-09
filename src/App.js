import React from "react";
import "./App.css";
import ReactPageScroller from "react-page-scroller";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import SobreMi from "./components/SobreMi";
import Conocimientos from "./components/Conocimientos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      currentPage: null,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(number) {
    this.setState({ currentPage: number });
  }

  render() {
    return (
      <div className="App">
        <div className="Menu">
          <a href="#Inicio" onClick={() => this.handlePageChange(0)}>
            Inicio
          </a>
          <a href="#Conocimientos" onClick={() => this.handlePageChange(1)}>
            Conocimientos
          </a>
          <a href="#sobreMi" onClick={() => this.handlePageChange(2)}>
            Sobre mí
          </a>
          <a href="#Contacto" onClick={() => this.handlePageChange(3)}>
            Contacto
          </a>
        </div>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Inicio pic={this.state.pics.length > 3 ? this.state.pics[0] : ""} />
          <Conocimientos
            pic={this.state.pics.length > 3 ? this.state.pics[1] : ""}
          />
          <SobreMi pic={this.state.pics.length > 3 ? this.state.pics[2] : ""} />
          <Contacto
            pic={this.state.pics.length > 3 ? this.state.pics[3] : ""}
          />
        </ReactPageScroller>
      </div>
    );
  }
}

export default App;
