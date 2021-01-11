import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Container from "react-bootstrap/Container"
import './App.css';

import Footer from "./components/footer/Footer"
import Home from "./components/homepage/HomePage"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Navbarjsx from "./components/navbar/Navbar"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Neal Gerber",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Contact", path: "/contact"}
      ],
      home: {
        title: "Do It",
        subTitle: "I'm great!",
        text: "Hello"
      },
      about: {
        title: "About Me",
      },
      portfolio: {
        title: "My Projects",
      },
      contact: {
        title: "Contact Me",
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
        <Navbarjsx />
          <Route path="/" exact render={() => <Home title={this.state.home.title}/>} />
          <Route path="/about" exact render={() => <About title={this.state.home.title}/>} />
          <Route path="/portfolio" exact render={() => <Portfolio title={this.state.home.title}/>} />
          <Route path="/contact" exact render={() => <Contact title={this.state.home.title}/>} />
          <Footer />
        </Container>
      </Router>
    );
  }
}






export default App;
