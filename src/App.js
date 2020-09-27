import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Popular from "./pages/Popular/Popular";
import About from "./pages/About/About";
import Playing from "./pages/Home/Playing";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
// import SearchPage from "./pages/SearchPage/SearchPage";
import Main from "./Main";

// ==================== //

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/search" component={SearchPage} /> */}
          <Route exact path="/popular" component={Popular} />
          <Route path="/popular/:id" component={MovieDetail} />
          <Route exact path="/playing" component={Playing} />
          <Route path="/playing/:id" component={MovieDetail} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}
