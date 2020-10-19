import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Galery from "./pages/Galery/Galery";
// import styles from "./App.module.css";

// ==================== //

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/galery" component={Galery} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
