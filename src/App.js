import React, { Component } from "react";
import Header from "./components/Header/Header";
import SlideShow from "./components/Carousel/Carousel.js";
import Bio from "./components/Jumbotron/Bio";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Break from "./components/Jumbotron/Jumbotron";
import Card1 from "./components/Cards/Card1";
import Card2 from "./components/Cards/Card2";
import Card3 from "./components/Cards/Card3";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SlideShow />
        <Bio />
        <div className="row">
          <div className="col-sm">
            <Card1 />
          </div>
          <div className="col-sm">
            <Card2 />
          </div>
          <div className="col-sm">
            <Card3 />
          </div>
        </div>
        <Break />
        <Footer />
      </div>
    );
  }
}

export default App;
